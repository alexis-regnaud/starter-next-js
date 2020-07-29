import React from "react";
import { Heading, HeadingProps, useThemeUI } from "theme-ui";
import { motion } from "framer-motion";

export type UIHeadingProps = HeadingProps & {
  fontFamily?: string;
  fontWeight?: string;
};

const UIHeading = React.forwardRef(
  ({ children, fontFamily, fontWeight, sx, as, variant, ...props }: UIHeadingProps, ref) => {
    const { theme } = useThemeUI();
    const variantLocal = variant ?? (as as string);
    return (
      <Heading
        ref={ref}
        variant={variantLocal}
        sx={{
          fontFamily: fontFamily ?? theme.fonts!.principal,
          fontWeight: fontWeight ?? theme.fontWeights!.regular,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Heading>
    );
  }
);

const MotionUIHeading = motion.custom(UIHeading);
export { UIHeading, MotionUIHeading };
