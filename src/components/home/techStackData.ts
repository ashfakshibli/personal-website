import type { CSSProperties, ComponentType } from "react";
import {
  SiPython,
  SiSwift,
  SiDart,
  SiDotnet,
  SiCplusplus,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiD3Dotjs,
  SiFirebase,
  SiGooglecloud,
  SiMysql,
  SiGit,
  SiJira,
  SiPytorch,
  SiDocker,
  SiGithubactions,
  SiPytest,
  SiSelenium,
  SiXcode,
  SiPhp,
  SiJavascript,
  SiGithubcopilot,
  SiLangchain,
  SiClaude,
  SiOpenai,
  SiRocket
} from "react-icons/si";

export type TechIcon = ComponentType<{
  className?: string;
  style?: CSSProperties;
  title?: string;
}>;

export type TechItem = {
  name: string;
  icon?: TechIcon;
  color?: string;
  logo?: string;
};

export type TechGroup = {
  name: string;
  items: TechItem[];
};

export const TECH_GROUPS: TechGroup[] = [
  {
    name: "Languages",
    items: [
      { icon: SiPython, color: "#3776AB", name: "Python" },
      { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
      { icon: SiPhp, color: "#777BB4", name: "PHP" },
      { icon: SiDart, color: "#0175C2", name: "Dart" },
      { icon: SiSwift, color: "#F05138", name: "Swift" },
      { icon: SiDotnet, color: "#239120", name: "C#" },
      { icon: SiCplusplus, color: "#00599C", name: "C++" },
      { name: "SQL" },
      { name: "NoSQL" },
      { name: "Shell" }
    ]
  },
  {
    name: "AI",
    items: [
      { icon: SiTensorflow, color: "#FF6F00", name: "TensorFlow" },
      { icon: SiPytorch, color: "#EE4C2C", name: "PyTorch" },
      { icon: SiScikitlearn, color: "#F7931E", name: "sklearn" },
      { name: "CNN/DNN" },
      { name: "NLTK" },
      { icon: SiGithubcopilot, color: "#000000", name: "Agentic Coding" },
      { icon: SiLangchain, color: "#1C3C3C", name: "Prompt Eng" },
      { icon: SiClaude, color: "#D97757", name: "Claude Code" },
      { icon: SiOpenai, color: "#412991", name: "Codex" },
      { icon: SiRocket, color: "#7C3AED", name: "Antigravity" }
    ]
  },
  {
    name: "Data, Viz & Cloud",
    items: [
      { icon: SiPandas, color: "#150458", name: "pandas" },
      { icon: SiNumpy, color: "#013243", name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { icon: SiPlotly, color: "#3F4F75", name: "Plotly" },
      { name: "Graphviz" },
      { icon: SiD3Dotjs, color: "#F9A03C", name: "D3.js" },
      { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
      { icon: SiGooglecloud, color: "#4285F4", name: "GCP" },
      { icon: SiMysql, color: "#4479A1", name: "MySQL" },
      { name: "REST API" }
    ]
  },
  {
    name: "Tools & Testing",
    items: [
      { icon: SiGit, color: "#F05032", name: "Git" },
      { icon: SiDocker, color: "#2496ED", name: "Docker" },
      { icon: SiGithubactions, color: "#2088FF", name: "CI/CD" },
      { icon: SiJira, color: "#0052CC", name: "Jira" },
      { icon: SiPytest, color: "#0A9EDC", name: "pytest" },
      { icon: SiXcode, color: "#147EFB", name: "Xcode/XCTest" },
      { icon: SiSelenium, color: "#43B02A", name: "Selenium" },
      { name: "Label Studio" },
      { name: "Carla" },
      { name: "VS Code" }
    ]
  }
];
