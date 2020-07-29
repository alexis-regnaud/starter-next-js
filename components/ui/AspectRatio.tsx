import React from "react";
import { Box, BoxProps } from "theme-ui";
import { motion } from "framer-motion";
import { UIFlex } from "./index";

export type UIAspectRatioProps = BoxProps & {
  ratio: number;
};

const UIAspectRatio = React.forwardRef(({ children, ratio, sx, ...props }: UIAspectRatioProps, ref) => {
  return (
    <Box
      ref={ref}
      {...props}
      sx={{
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          display: "block",
          paddingTop: `${100 / ratio}%`,
        },
        ...sx,
      }}
    >
      <UIFlex
        sx={{
          bottom: 0,
          left: 0,
          margin: "auto",
          maxHeight: "100%",
          maxWidth: "100%",
          padding: 0,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        {children}
      </UIFlex>
    </Box>
  );
});

const MotionUIAspectRatio = motion.custom(UIAspectRatio);
export { UIAspectRatio, MotionUIAspectRatio };
