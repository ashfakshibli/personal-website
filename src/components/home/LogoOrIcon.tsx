import React, { useState } from "react";

interface TechItem {
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties; title?: string }>;
  color?: string;
  name: string;
  logo?: string;
}

interface LogoOrIconProps {
  tech: TechItem;
  groupIndex: number;
  index: number;
}

const LogoOrIcon: React.FC<LogoOrIconProps> = ({ tech }) => {
  const [logoError, setLogoError] = useState(false);
  if (tech.logo) {
    return (
      <span title={tech.name} className="flex flex-col items-center">
        {!logoError ? (
          <img
            src={tech.logo}
            alt={tech.name}
            className="w-8 h-8 mb-1"
            onError={() => setLogoError(true)}
          />
        ) : null}
        <span className="text-xs text-gray-600 dark:text-gray-300">{tech.name}</span>
      </span>
    );
  }
  return (
    <span className="flex flex-col items-center">
      {tech.icon ? (
        <tech.icon
          className="w-5 h-5 mb-1 transition-transform duration-200"
          style={{ color: tech.color }}
          title={tech.name}
        />
      ) : null}
      <span className="text-xs text-gray-600 dark:text-gray-300">{tech.name}</span>
    </span>
  );
};

export default LogoOrIcon;