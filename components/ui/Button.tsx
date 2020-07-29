import React from "react";
import { jsx, Button, ButtonProps, useThemeUI } from "theme-ui";
import { motion, MotionProps } from "framer-motion";
import { UIFlex } from "./index";

/** @jsx jsx */

const MotionButton = motion.custom(Button);

export type UIButtonProps = ButtonProps & {
  endIcon?: React.ReactElement;
  startIcon?: React.ReactElement;
};

const UIButton = React.forwardRef(
  ({ children, variant = "primary", endIcon, startIcon, ...props }: UIButtonProps & MotionProps, ref) => {
    const { theme } = useThemeUI();

    // TODO: Do getVariants
    const variants = variant === "primary" ? "primaries" : "secondaries";

    return (
      <MotionButton
        ref={ref}
        variant={variant}
        whileHover={{ backgroundColor: theme.colors![variants][700] }}
        whileTap={{ backgroundColor: theme.colors![variants][900] }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        <UIFlex direction="row">
          {startIcon && <IconContainer sx={{ marginRight: 10 }}>{startIcon}</IconContainer>}
          {children}
          {endIcon && <IconContainer sx={{ marginLeft: 10 }}>{endIcon}</IconContainer>}
        </UIFlex>
      </MotionButton>
    );
  }
);

const IconContainer = ({ children, ...props }) => {
  return <span {...props}>{children}</span>;
};

const MotionUIButton = motion.custom(UIButton);
export { UIButton, MotionUIButton };
