"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  type Simulation,
  type SimulationLinkDatum,
  type SimulationNodeDatum
} from "d3-force";
import { motion } from "framer-motion";
import { BrainCircuit, ChartBar, Code, Layers, Wrench } from "lucide-react";
import { useTheme } from "next-themes";
import { useWindowSize } from "@/hooks/useWindowSize";
import { TECH_GROUPS, type TechIcon } from "./techStackData";

type GraphNodeKind = "root" | "group" | "tech";

interface GraphNode extends SimulationNodeDatum {
  id: string;
  label: string;
  kind: GraphNodeKind;
  groupId?: string;
  color: string;
  radius: number;
  icon?: TechIcon;
  logo?: string;
  techIndex?: number;
  techCount?: number;
  targetX?: number;
  targetY?: number;
}

interface GraphLink extends SimulationLinkDatum<GraphNode> {
  id: string;
  source: string | GraphNode;
  target: string | GraphNode;
  kind: "root" | "membership";
}

interface GraphPalette {
  edge: string;
  edgeActive: string;
  labelGroup: string;
  labelTech: string;
  labelDim: string;
  nodeStroke: string;
  rootNode: string;
  rootLabel: string;
}

const GROUP_COLORS = ["#3b82f6", "#a855f7", "#22c55e", "#f59e0b"];
const BASE_HEIGHT = 400;
const MOBILE_BREAKPOINT = 768;
const ROOT_ICON: TechIcon = Layers;
const GROUP_ICONS: Record<string, TechIcon> = {
  Languages: Code,
  AI: BrainCircuit,
  "Data, Viz & Cloud": ChartBar,
  "Tools & Testing": Wrench
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getNodeId(nodeRef: string | GraphNode): string {
  return typeof nodeRef === "string" ? nodeRef : nodeRef.id;
}

function getNodeOpacity(nodeId: string, activeNodeIds: Set<string> | null) {
  if (!activeNodeIds) {
    return 0.96;
  }
  return activeNodeIds.has(nodeId) ? 1 : 0.2;
}

function getLinkOpacity(
  sourceId: string,
  targetId: string,
  activeNodeIds: Set<string> | null
) {
  if (!activeNodeIds) {
    return 0.34;
  }
  return activeNodeIds.has(sourceId) && activeNodeIds.has(targetId) ? 0.92 : 0.07;
}

function getGroupAnchor(
  groupIndex: number,
  groupCount: number,
  centerX: number,
  centerY: number,
  sideOffset: number,
  verticalSpread: number
) {
  const leftCount = Math.ceil(groupCount / 2);
  const rightCount = groupCount - leftCount;
  const isLeft = groupIndex < leftCount;

  const sideCount = isLeft ? leftCount : rightCount;
  const sideIndex = isLeft ? groupIndex : groupIndex - leftCount;
  const yRatio = sideCount <= 1 ? 0 : sideIndex / (sideCount - 1);
  const y = centerY + (yRatio - 0.5) * verticalSpread * 2;
  const x = centerX + (isLeft ? -sideOffset : sideOffset);

  return { x, y };
}

function getPalette(isDark: boolean): GraphPalette {
  if (isDark) {
    return {
      edge: "#64748b",
      edgeActive: "#93c5fd",
      labelGroup: "#e2e8f0",
      labelTech: "#cbd5e1",
      labelDim: "#64748b",
      nodeStroke: "#0f172a",
      rootNode: "#38bdf8",
      rootLabel: "#f8fafc"
    };
  }

  return {
    edge: "#94a3b8",
    edgeActive: "#2563eb",
    labelGroup: "#334155",
    labelTech: "#475569",
    labelDim: "#94a3b8",
    nodeStroke: "#ffffff",
    rootNode: "#0284c7",
    rootLabel: "#0f172a"
  };
}

function getRenderableNodeColor(node: GraphNode, isDark: boolean, palette: GraphPalette) {
  if (node.kind === "root") {
    return palette.rootNode;
  }

  if (isDark && node.color.toLowerCase() === "#000000") {
    return "#d1d5db";
  }

  return node.color;
}

export default function TechGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<Simulation<GraphNode, GraphLink> | null>(null);
  const frameRef = useRef<number | null>(null);
  const stopTimerRef = useRef<number | null>(null);

  const [viewport, setViewport] = useState({ width: 0, height: BASE_HEIGHT });
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [renderNodes, setRenderNodes] = useState<GraphNode[]>([]);
  const [renderLinks, setRenderLinks] = useState<GraphLink[]>([]);

  const { width: windowWidth } = useWindowSize();
  const { resolvedTheme } = useTheme();

  const isMobile = windowWidth > 0 && windowWidth < MOBILE_BREAKPOINT;
  const isDark = resolvedTheme === "dark";
  const palette = useMemo(() => getPalette(isDark), [isDark]);

  const graphData = useMemo(() => {
    const rootId = "root-tech-stack";
    const nodes: GraphNode[] = [
      {
        id: rootId,
        label: "Tech Stack",
        kind: "root",
        color: "#38bdf8",
        radius: 15,
        icon: ROOT_ICON
      }
    ];

    const links: GraphLink[] = [];
    const groupToTech = new Map<string, string[]>();
    const techToGroup = new Map<string, string>();
    const nodeById = new Map<string, GraphNode>();
    nodeById.set(rootId, nodes[0]);

    TECH_GROUPS.forEach((group, groupIndex) => {
      const groupId = `group-${groupIndex}`;
      const groupNode: GraphNode = {
        id: groupId,
        label: group.name,
        kind: "group",
        color: GROUP_COLORS[groupIndex % GROUP_COLORS.length],
        radius: 12,
        icon: GROUP_ICONS[group.name] ?? ROOT_ICON
      };
      nodes.push(groupNode);
      nodeById.set(groupId, groupNode);
      groupToTech.set(groupId, []);

      links.push({
        id: `${rootId}->${groupId}`,
        source: rootId,
        target: groupId,
        kind: "root"
      });

      group.items.forEach((tech, techIndex) => {
        const techId = `tech-${groupIndex}-${techIndex}`;
        const techNode: GraphNode = {
          id: techId,
          label: tech.name,
          kind: "tech",
          groupId,
          color: tech.color ?? GROUP_COLORS[groupIndex % GROUP_COLORS.length],
          radius: 6.6,
          icon: tech.icon,
          logo: tech.logo,
          techIndex,
          techCount: group.items.length
        };

        nodes.push(techNode);
        nodeById.set(techId, techNode);
        techToGroup.set(techId, groupId);

        const groupItems = groupToTech.get(groupId);
        if (groupItems) {
          groupItems.push(techId);
        }

        links.push({
          id: `${groupId}->${techId}`,
          source: groupId,
          target: techId,
          kind: "membership"
        });
      });
    });

    return {
      rootId,
      nodes,
      links,
      nodeById,
      groupToTech,
      techToGroup,
      allNodeIds: nodes.map((node) => node.id)
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) {
        return;
      }

      const nextWidth = Math.round(rect.width);
      const nextHeight = Math.round(rect.height || BASE_HEIGHT);

      setViewport((prev) => {
        if (prev.width === nextWidth && prev.height === nextHeight) {
          return prev;
        }
        return { width: nextWidth, height: nextHeight };
      });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!viewport.width) {
      return undefined;
    }

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (stopTimerRef.current !== null) {
      window.clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }

    simulationRef.current?.stop();

    const centerX = viewport.width / 2;
    const centerY = viewport.height / 2;
    const sideOffset = clamp(viewport.width * (isMobile ? 0.21 : 0.23), 96, 255);
    const verticalSpread = clamp(viewport.height * (isMobile ? 0.1 : 0.095), 30, 56);
    const leafSpread = isMobile ? Math.PI * 0.56 : Math.PI * 0.62;
    const leafRadiusXBase = isMobile ? 78 : 120;
    const leafRadiusXStep = isMobile ? 15 : 20;
    const leafRadiusYBase = isMobile ? 22 : 30;
    const leafRadiusYStep = isMobile ? 5 : 7;
    const leafJitterX = isMobile ? 5 : 7;
    const leafJitterY = isMobile ? 4 : 6;
    const verticalTiltStrength = isMobile ? 0.34 : 0.45;

    const groupComplexity = TECH_GROUPS.map((group) => {
      const avgLabelLength =
        group.items.reduce((sum, item) => sum + item.name.length, 0) /
        Math.max(group.items.length, 1);
      const countFactor = clamp((group.items.length - 8) / 4, 0, 1);
      const labelFactor = clamp((avgLabelLength - 6.5) / 6, 0, 1);
      return countFactor * 0.55 + labelFactor * 0.45;
    });

    const clusterTuningByName: Record<
      string,
      {
        anchorX: number;
        anchorY: number;
        spread: number;
        radiusX: number;
        radiusY: number;
        tilt: number;
      }
    > = isMobile
      ? {
          Languages: { anchorX: 0, anchorY: 0, spread: 0, radiusX: 0, radiusY: 0, tilt: 0 },
          AI: { anchorX: 6, anchorY: -6, spread: Math.PI * 0.04, radiusX: 8, radiusY: 2, tilt: 0.04 },
          "Data, Viz & Cloud": {
            anchorX: 8,
            anchorY: 8,
            spread: Math.PI * 0.04,
            radiusX: 10,
            radiusY: 2,
            tilt: 0.04
          },
          "Tools & Testing": {
            anchorX: 8,
            anchorY: -8,
            spread: Math.PI * 0.05,
            radiusX: 10,
            radiusY: 2,
            tilt: 0.05
          }
        }
      : {
          Languages: { anchorX: 0, anchorY: 0, spread: 0, radiusX: 0, radiusY: 0, tilt: 0 },
          AI: {
            anchorX: 16,
            anchorY: -14,
            spread: Math.PI * 0.07,
            radiusX: 26,
            radiusY: 4,
            tilt: 0.08
          },
          "Data, Viz & Cloud": {
            anchorX: 24,
            anchorY: 16,
            spread: Math.PI * 0.08,
            radiusX: 34,
            radiusY: 6,
            tilt: 0.08
          },
          "Tools & Testing": {
            anchorX: 28,
            anchorY: -18,
            spread: Math.PI * 0.09,
            radiusX: 36,
            radiusY: 6,
            tilt: 0.1
          }
        };

    const clusterTuningByIndex = TECH_GROUPS.map((group) => {
      return (
        clusterTuningByName[group.name] ?? {
          anchorX: 0,
          anchorY: 0,
          spread: 0,
          radiusX: 0,
          radiusY: 0,
          tilt: 0
        }
      );
    });

    const groupAnchors = new Map<string, { x: number; y: number }>();
    TECH_GROUPS.forEach((_, groupIndex) => {
      const baseAnchor = getGroupAnchor(
        groupIndex,
        TECH_GROUPS.length,
        centerX,
        centerY,
        sideOffset,
        verticalSpread
      );
      const complexity = groupComplexity[groupIndex] ?? 0;
      const tuning = clusterTuningByIndex[groupIndex];
      const extraX = complexity * (isMobile ? 12 : 44) + tuning.anchorX;
      const isLeft = baseAnchor.x < centerX;
      groupAnchors.set(`group-${groupIndex}`, {
        x: baseAnchor.x + (isLeft ? -extraX : extraX),
        y: baseAnchor.y + tuning.anchorY
      });
    });

    const simulationNodes = graphData.nodes.map((node) => {
      const nextNode: GraphNode = { ...node };
      if (nextNode.kind === "root") {
        nextNode.x = centerX;
        nextNode.y = centerY;
        nextNode.fx = centerX;
        nextNode.fy = centerY;
        return nextNode;
      }

      const anchor = nextNode.kind === "group"
        ? groupAnchors.get(nextNode.id)
        : nextNode.groupId
          ? groupAnchors.get(nextNode.groupId)
          : undefined;

      if (!anchor) {
        nextNode.x = centerX + (Math.random() - 0.5) * 24;
        nextNode.y = centerY + (Math.random() - 0.5) * 24;
        return nextNode;
      }

      if (nextNode.kind === "group") {
        nextNode.x = anchor.x + (Math.random() - 0.5) * 8;
        nextNode.y = anchor.y + (Math.random() - 0.5) * 8;
        return nextNode;
      }

      const techCount = Math.max(nextNode.techCount ?? 1, 1);
      const techIndex = nextNode.techIndex ?? 0;
      const normalizedIndex = techCount <= 1 ? 0.5 : techIndex / (techCount - 1);
      const groupOnLeft = anchor.x < centerX;
      const groupIndex = Number((nextNode.groupId ?? "group-0").split("-")[1]);
      const complexity = groupComplexity[groupIndex] ?? 0;
      const tuning = clusterTuningByIndex[groupIndex];
      const localSpread = clamp(
        leafSpread + complexity * (isMobile ? Math.PI * 0.1 : Math.PI * 0.2) + tuning.spread,
        Math.PI * 0.4,
        Math.PI * 0.96
      );
      const baseAngle = groupOnLeft ? Math.PI : 0;
      const normalizedGroupY = clamp((anchor.y - centerY) / Math.max(verticalSpread, 1), -1, 1);
      const verticalTilt = normalizedGroupY * (verticalTiltStrength + tuning.tilt);
      const theta = baseAngle + verticalTilt + (normalizedIndex - 0.5) * localSpread * 2;
      const band = techIndex % 5;
      const radiusX =
        leafRadiusXBase +
        band * leafRadiusXStep +
        complexity * (isMobile ? 10 : 28) +
        tuning.radiusX;
      const radiusY =
        leafRadiusYBase +
        band * leafRadiusYStep +
        complexity * (isMobile ? 6 : 14) +
        tuning.radiusY;
      const targetX = anchor.x + Math.cos(theta) * radiusX;
      const targetY = anchor.y + Math.sin(theta) * radiusY;
      nextNode.targetX = targetX;
      nextNode.targetY = targetY;
      nextNode.x = targetX + (Math.random() - 0.5) * leafJitterX;
      nextNode.y = targetY + (Math.random() - 0.5) * leafJitterY;
      return nextNode;
    });

    const simulationLinks = graphData.links.map((link) => ({ ...link }));
    setRenderNodes([...simulationNodes]);
    setRenderLinks([...simulationLinks]);

    const simulation = forceSimulation(simulationNodes)
      .force(
        "link",
        forceLink<GraphNode, GraphLink>(simulationLinks)
          .id((node) => node.id)
          .distance((link) => (link.kind === "root" ? sideOffset * 0.88 : isMobile ? 74 : 92))
          .strength((link) => (link.kind === "root" ? 0.92 : 0.95))
      )
      .force(
        "charge",
        forceManyBody<GraphNode>().strength((node) => {
          if (node.kind === "root") {
            return -1200;
          }
          if (node.kind === "group") {
            return -760;
          }
          return -300;
        })
      )
      .force(
        "collide",
        forceCollide<GraphNode>().radius((node) => {
          if (node.kind === "root") {
            return 52;
          }
          if (node.kind === "group") {
            return 32;
          }
          return clamp(15 + node.label.length * 0.92, 22, 40);
        })
      )
      .force("center", forceCenter(centerX, centerY))
      .force(
        "x",
        forceX<GraphNode>((node) => {
          if (node.kind === "root") {
            return centerX;
          }
          if (node.kind === "group") {
            return groupAnchors.get(node.id)?.x ?? centerX;
          }
          const anchor = node.groupId ? groupAnchors.get(node.groupId) : null;
          return node.targetX ?? anchor?.x ?? centerX;
        }).strength((node) => {
          if (node.kind === "root") {
            return 0.7;
          }
          if (node.kind === "group") {
            return 0.34;
          }
          return 0.28;
        })
      )
      .force(
        "y",
        forceY<GraphNode>((node) => {
          if (node.kind === "root") {
            return centerY;
          }
          if (node.kind === "group") {
            return groupAnchors.get(node.id)?.y ?? centerY;
          }
          const anchor = node.groupId ? groupAnchors.get(node.groupId) : null;
          return node.targetY ?? anchor?.y ?? centerY;
        }).strength((node) => {
          if (node.kind === "root") {
            return 0.7;
          }
          if (node.kind === "group") {
            return 0.34;
          }
          return 0.15;
        })
      )
      .alphaDecay(prefersReducedMotion ? 0.13 : 0.066);

    simulation.on("tick", () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        const horizontalPadding = isMobile ? 16 : 20;
        const verticalPadding = isMobile ? 22 : 30;
        const labelPad = 10;
        for (const node of simulationNodes) {
          if (node.kind === "root") {
            node.x = centerX;
            node.y = centerY;
            continue;
          }
          const safeXMin = node.radius + horizontalPadding;
          const safeXMax = viewport.width - node.radius - horizontalPadding;
          const safeYMin = node.radius + verticalPadding + labelPad;
          const safeYMax = viewport.height - node.radius - verticalPadding - labelPad;
          node.x = clamp(node.x ?? centerX, safeXMin, safeXMax);
          node.y = clamp(node.y ?? centerY, safeYMin, safeYMax);
        }
        setRenderNodes([...simulationNodes]);
      });
    });

    simulationRef.current = simulation;
    simulation.alpha(1).restart();

    stopTimerRef.current = window.setTimeout(
      () => simulation.stop(),
      prefersReducedMotion ? 850 : 3200
    );

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      if (stopTimerRef.current !== null) {
        window.clearTimeout(stopTimerRef.current);
        stopTimerRef.current = null;
      }
      simulation.stop();
    };
  }, [
    graphData.links,
    graphData.nodes,
    isMobile,
    prefersReducedMotion,
    viewport.height,
    viewport.width
  ]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedNodeId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeNodeId = selectedNodeId ?? hoveredNodeId;

  const activeNodeIds = useMemo(() => {
    if (!activeNodeId) {
      return null;
    }

    const activeNode = graphData.nodeById.get(activeNodeId);
    if (!activeNode) {
      return null;
    }

    if (activeNode.kind === "root") {
      return new Set(graphData.allNodeIds);
    }

    const next = new Set<string>();
    next.add(graphData.rootId);

    if (activeNode.kind === "group") {
      next.add(activeNode.id);
      const children = graphData.groupToTech.get(activeNode.id) ?? [];
      children.forEach((childId) => next.add(childId));
      return next;
    }

    next.add(activeNode.id);
    const groupId = graphData.techToGroup.get(activeNode.id);
    if (!groupId) {
      return next;
    }
    next.add(groupId);
    return next;
  }, [
    activeNodeId,
    graphData.allNodeIds,
    graphData.groupToTech,
    graphData.nodeById,
    graphData.rootId,
    graphData.techToGroup
  ]);

  const renderNodeById = useMemo(() => {
    return new Map(renderNodes.map((node) => [node.id, node]));
  }, [renderNodes]);

  const graphWidth = Math.max(viewport.width, 1);
  const graphHeight = Math.max(viewport.height || BASE_HEIGHT, 1);

  return (
    <div className="w-full">
      <motion.div initial={false} animate={{ opacity: 1 }} className="w-full">
        <div ref={containerRef} className="relative w-full h-[390px] md:h-[450px]">
          <svg
            width={graphWidth}
            height={graphHeight}
            viewBox={`0 0 ${graphWidth} ${graphHeight}`}
            className="w-full h-full"
            onClick={() => {
              setSelectedNodeId(null);
              setHoveredNodeId(null);
            }}
          >
            <g>
              {renderLinks.map((link) => {
                const sourceNode =
                  typeof link.source === "string"
                    ? renderNodeById.get(link.source)
                    : link.source;
                const targetNode =
                  typeof link.target === "string"
                    ? renderNodeById.get(link.target)
                    : link.target;

                if (!sourceNode || !targetNode) {
                  return null;
                }

                const sourceId = getNodeId(link.source);
                const targetId = getNodeId(link.target);
                const isActive =
                  activeNodeIds?.has(sourceId) && activeNodeIds?.has(targetId);

                return (
                  <line
                    key={link.id}
                    x1={sourceNode.x ?? graphWidth / 2}
                    y1={sourceNode.y ?? graphHeight / 2}
                    x2={targetNode.x ?? graphWidth / 2}
                    y2={targetNode.y ?? graphHeight / 2}
                    stroke={isActive ? palette.edgeActive : palette.edge}
                    strokeWidth={isActive ? 1.9 : link.kind === "root" ? 1.5 : 1.05}
                    strokeOpacity={getLinkOpacity(sourceId, targetId, activeNodeIds)}
                  />
                );
              })}
            </g>

            <g>
              {renderNodes.map((node) => {
                const isActive = activeNodeIds?.has(node.id) ?? false;
                const showLabel = !isMobile;
                const IconComponent = node.icon;
                const nodeX = node.x ?? graphWidth / 2;
                const isRightSide = nodeX > graphWidth / 2;
                const textAnchor = isRightSide ? "end" : "start";
                const iconSize = node.kind === "root" ? 22 : node.kind === "group" ? 18 : 14;
                const iconHalf = iconSize / 2;
                const textX = isRightSide ? -(iconHalf + 8) : iconHalf + 8;
                const textY = 4;
                const fontSize = node.kind === "root" ? 12 : node.kind === "group" ? 11 : 10;
                const iconColor = getRenderableNodeColor(node, isDark, palette);
                const nodeOpacity = getNodeOpacity(node.id, activeNodeIds);
                const displayLabel = node.kind === "root" ? "Tech Stack" : node.label;
                const hitRadius = Math.max(node.radius + 6, iconHalf + 6);

                return (
                  <g
                    key={node.id}
                    transform={`translate(${nodeX}, ${node.y ?? graphHeight / 2})`}
                    tabIndex={0}
                    role="button"
                    aria-label={node.label}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onFocus={() => setHoveredNodeId(node.id)}
                    onBlur={() => setHoveredNodeId(null)}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
                      }
                    }}
                    className="cursor-pointer outline-none"
                  >
                    <circle
                      r={hitRadius}
                      fill="transparent"
                      stroke={isActive ? palette.edgeActive : "transparent"}
                      strokeWidth={isActive ? 2 : 0}
                    />
                    {node.logo ? (
                      <image
                        href={node.logo}
                        x={-iconHalf}
                        y={-iconHalf}
                        width={iconSize}
                        height={iconSize}
                        opacity={nodeOpacity}
                      />
                    ) : IconComponent ? (
                      <g transform={`translate(${-iconHalf}, ${-iconHalf})`} opacity={nodeOpacity}>
                        <IconComponent size={iconSize} style={{ color: iconColor }} />
                      </g>
                    ) : (
                      <circle
                        r={iconHalf}
                        fill={iconColor}
                        opacity={nodeOpacity}
                      />
                    )}
                    {showLabel && (
                      <text
                        x={textX}
                        y={textY}
                        textAnchor={textAnchor}
                        paintOrder={node.kind === "root" ? "stroke" : undefined}
                        stroke={node.kind === "root" ? (isDark ? "#0f172a" : "#ffffff") : undefined}
                        strokeWidth={node.kind === "root" ? 1.8 : undefined}
                        fill={
                          node.kind === "root"
                            ? palette.rootLabel
                            : node.kind === "group"
                              ? palette.labelGroup
                              : activeNodeIds && !isActive
                                ? palette.labelDim
                                : palette.labelTech
                        }
                        fontSize={fontSize}
                        fontWeight={node.kind === "tech" ? 500 : 600}
                        opacity={node.kind === "root" ? 1 : nodeOpacity}
                      >
                        {displayLabel}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
