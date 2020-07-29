import React, { ReactNode } from "react";
import { Container, ContainerProps } from "theme-ui";
import { motion } from "framer-motion";

const firstCapitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export type UIContainerProps = ContainerProps & {
  size?: string;
};

const UIContainer = React.forwardRef(({ children, size = "sm", sx, ...props }: UIContainerProps, ref) => (
  <Container
    ref={ref}
    sx={{
      maxWidth: `container${firstCapitalize(size)}`,
      ...sx,
    }}
    {...props}
  >
    {children}
  </Container>
));

const MotionUIContainer = motion.custom(UIContainer);
export { UIContainer, MotionUIContainer };
