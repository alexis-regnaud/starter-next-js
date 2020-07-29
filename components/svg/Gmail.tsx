import React, { useEffect } from "react";
import { useThemeUI } from "theme-ui";
import { Transition, useAnimation, motion } from "framer-motion";

interface GmailProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  transition?: Transition;
}

const Gmail = ({ color = "white", height = "18px", width = "18px", transition }: GmailProps) => {
  const { theme } = useThemeUI();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      fill: (theme.colors![color] as string) ?? color,
      transition,
    });
  }, [color]);

  return (
    <svg width={width} height={height} viewBox="0 0 18 15" version="1.1">
      <title>gmail</title>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <motion.g
          animate={controls}
          id="07"
          transform="translate(-926.000000, -36.000000)"
          fill={(theme.colors![color] as string) ?? color}
          fillRule="nonzero"
        >
          <g id="Group-9-Copy-3">
            <g transform="translate(868.000000, 0.000000)">
              <path
                d="M76,37.8 C76,36.8058875 75.1941125,36 74.2,36 L59.8,36 C58.8058875,36 58,36.8058875 58,37.8 L58,48.6 C58,49.5941125 58.8058875,50.4 59.8,50.4 L74.2,50.4 C75.1941125,50.4 76,49.5941125 76,48.6 L76,37.8 Z M73.75,48.6 L72.85,48.6 C72.6014719,48.6 72.4,48.3985281 72.4,48.15 L72.4,39.933 L67.378,43.956 C67.2681061,44.0386956 67.1370609,44.0886176 67,44.1 L66.838,44.1 C66.6854027,44.0974615 66.5374504,44.0470948 66.415,43.956 L61.6,40.131 L61.6,48.15 C61.6,48.3985281 61.3985281,48.6 61.15,48.6 L60.25,48.6 C60.0014719,48.6 59.8,48.3985281 59.8,48.15 L59.8,38.25 C59.8,38.0014719 60.0014719,37.8 60.25,37.8 L61.249,37.8 C61.4520078,37.8011776 61.6486547,37.8709555 61.807,37.998 L66.874,42.048 L71.95,37.998 C72.1083453,37.8709555 72.3049922,37.8011776 72.508,37.8 L73.75,37.8 C73.9985281,37.8 74.2,38.0014719 74.2,38.25 L74.2,48.15 C74.2,48.3985281 73.9985281,48.6 73.75,48.6 Z"
                id="gmail"
              />
            </g>
          </g>
        </motion.g>
      </g>
    </svg>
  );
};

export default Gmail;
