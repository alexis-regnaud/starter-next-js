import React, { useEffect } from "react";
import { useThemeUI } from "theme-ui";
import { Transition, useAnimation, motion } from "framer-motion";

interface FacebookProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  transition?: Transition;
}

const Facebook = ({ color = "white", height = "15px", width = "8px", transition }: FacebookProps) => {
  const { theme } = useThemeUI();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      fill: (theme.colors![color] as string) ?? color,
      transition,
    });
  }, [color]);

  return (
    <svg width={width} height={height} viewBox="0 0 8 15" version="1.1">
      <title>facebook</title>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <motion.g
          animate={controls}
          id="07"
          transform="translate(-902.000000, -36.000000)"
          fill={(theme.colors![color] as string) ?? color}
          fillRule="nonzero"
        >
          <g id="Group-9-Copy-3">
            <g transform="translate(868.000000, 0.000000)">
              <path
                d="M41.6,38.4 L39.2,38.4 C38.7581722,38.4 38.4,38.7581722 38.4,39.2 L38.4,41.6 L41.6,41.6 C41.6909895,41.5979812 41.7772835,41.640312 41.8313802,41.7135016 C41.8854769,41.7866912 41.9006261,41.8816072 41.872,41.968 L41.28,43.728 C41.2254451,43.8895351 41.074494,43.9987337 40.904,44 L38.4,44 L38.4,50 C38.4,50.2209139 38.2209139,50.4 38,50.4 L36,50.4 C35.7790861,50.4 35.6,50.2209139 35.6,50 L35.6,44 L34.4,44 C34.1790861,44 34,43.8209139 34,43.6 L34,42 C34,41.7790861 34.1790861,41.6 34.4,41.6 L35.6,41.6 L35.6,39.2 C35.6,37.4326888 37.0326888,36 38.8,36 L41.6,36 C41.8209139,36 42,36.1790861 42,36.4 L42,38 C42,38.2209139 41.8209139,38.4 41.6,38.4 Z"
                id="facebook"
              />
            </g>
          </g>
        </motion.g>
      </g>
    </svg>
  );
};

export default Facebook;
