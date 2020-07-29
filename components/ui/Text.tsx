import React from "react";
import { Text, TextProps, useThemeUI } from "theme-ui";
import { motion } from "framer-motion";

export type UITextProps = TextProps & {
  fontFamily?: string;
  fontWeight?: string;
};

const UIText = React.forwardRef(
  ({ children, as = "p", fontFamily, fontWeight, sx, ...props }: UITextProps, ref) => {
    const { theme } = useThemeUI();
    return (
      <Text
        ref={ref}
        sx={{
          fontFamily: fontFamily ?? theme.fonts.principal,
          fontWeight: fontWeight ?? theme.fontWeights.regular,
          ...sx,
        }}
        as={as}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

const MotionUIText = motion.custom(UIText);
export { UIText, MotionUIText };
