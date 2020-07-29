import React from "react";
import { Box, BoxProps } from "theme-ui";
import { motion } from "framer-motion";
import { UIButton } from "./Button";

const UICard = React.forwardRef(({ children, sx, ...props }: BoxProps, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
});

// Todo: improve card header
const UICardHeader = ({ children, sx, ...props }: BoxProps) => {
  return (
    <Box
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
const UICardContent = ({ children, sx, ...props }: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

// Todo: improve card actions
const UICardActions = ({ children, sx, ...props }: BoxProps) => {
  return (
    <Box
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

const MotionUICard = motion.custom(UICard);
const MotionUICardActions = motion.custom(UICardActions);
const MotionUIUICardContent = motion.custom(UICardContent);
const MotionUICardHeader = motion.custom(UICardHeader);

export {
  UICard,
  UICardActions,
  UICardContent,
  UICardHeader,
  MotionUICard,
  MotionUICardActions,
  MotionUICardHeader,
  MotionUIUICardContent,
};
