import React, { useEffect } from "react";
import { jsx, ImageProps } from "theme-ui";
import { motion, MotionProps, useAnimation } from "framer-motion";
import { MotionUIImage } from "../ui";

/** @jsx jsx */

export type ImageEntranceProps = ImageProps &
  MotionProps & {
    visible: boolean;
  };

const ImageEntrance = ({ children, src, visible = false, ref, ...props }: ImageEntranceProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (visible) {
      controls.start("visible");
    }
  }, [controls, visible]);

  return (
    <motion.div
      sx={{
        overflow: "hidden",
        position: "relative",
        display: "inline-block",
      }}
    >
      <MotionUIImage
        animate={controls}
        initial="hidden"
        src={src}
        sx={{ maxWidth: "100%", height: "auto", display: "block" }}
        {...props}
      />
    </motion.div>
  );
};

export default ImageEntrance;
