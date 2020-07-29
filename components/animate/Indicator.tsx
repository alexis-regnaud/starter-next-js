import * as React from "react";
import { motion, MotionValue } from "framer-motion";

type Props = {
  x?: MotionValue<number>;
  y?: MotionValue<number>;
  width?: MotionValue<number>;
  height?: MotionValue<number>;
  color?: string;
  style?: React.CSSProperties;
};

export const Indicator: React.FC<Props> = ({ x, y, width, height, color = "#6cc7f8", style, ...rest }) => {
  return (
    <div
      {...rest}
      style={{
        width: 200,
        height: 16,
        borderRadius: 16,
        backgroundColor: "rgba(255, 255, 255, .1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 4,
        margin: "1em 0",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: 999,
        }}
      >
        <motion.div
          style={{
            x: x || 0,
            y: y || 0,
            width: width || "100%",
            height: height || "100%",
            backgroundColor: color,
            borderRadius: 999,
          }}
        />
      </div>
    </div>
  );
};
