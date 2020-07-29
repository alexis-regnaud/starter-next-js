import React from "react";
import { Image, ImageProps } from "theme-ui";
import { motion } from "framer-motion";

export type UIImageProps = ImageProps;

const UIImage = React.forwardRef(({ children, variant = "img", ...props }: UIImageProps, ref) => {
  return (
    <Image ref={ref} variant={variant} {...props}>
      {children}
    </Image>
  );
});

const MotionUIImage = motion.custom(UIImage);
export { UIImage, MotionUIImage };
