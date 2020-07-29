import React, { ReactNode } from "react";
import { Flex, FlexProps } from "theme-ui";
import { motion } from "framer-motion";

const defaultPosition = ["center", "center"];

export type UIFlexProps = FlexProps & {
  direction?: string;
  positions?: Array<string>;
};

const UIFlex = React.forwardRef(
  ({ direction = "column", positions = defaultPosition, sx, ...props }: UIFlexProps, ref) => (
    <Flex
      ref={ref}
      sx={{
        flexDirection: direction,
        justifyContent: direction === "column" ? positions[1] : positions[0],
        alignItems: direction === "column" ? positions[0] : positions[1],
        ...sx,
      }}
      {...props}
    />
  )
);

const MotionUIFlex = motion.custom(UIFlex);
export { UIFlex, MotionUIFlex };
