import React, { useEffect } from "react";
import { jsx, ImageProps } from "theme-ui";
import { motion, MotionProps, useAnimation } from "framer-motion";
import { MotionUIImage } from "../ui";

/** @jsx jsx */

export type ImageOverlayProps = ImageProps &
  MotionProps & {
    direction?: "left" | "right" | "top" | "bottom";
    deltaImg?: string | number;
    visible: boolean;
  };

const ImageOverlay = ({
  children,
  src,
  direction = "left",
  deltaImg = "15%",
  visible = false,
  ref,
  ...props
}: ImageOverlayProps) => {
  const controls = useAnimation();

  const getTransforms = () => {
    switch (direction) {
      case "top":
        return {
          overlay: {
            start: "translateY(0%)",
            end: "translateY(100%)",
          },
          img: {
            start: `translateY(-${deltaImg})`,
            end: "translateY(0%)",
          },
        };
      case "bottom":
        return {
          overlay: {
            start: "translateY(0%)",
            end: "translateY(-100%)",
          },
          img: {
            start: `translateY(${deltaImg})`,
            end: "translateY(0%)",
          },
        };
      case "left":
        return {
          overlay: {
            start: "translateX(0%)",
            end: "translateX(-100%)",
          },
          img: {
            start: `translateX(-${deltaImg})`,
            end: "translateX(0%)",
          },
        };
      case "right":
        return {
          overlay: {
            start: "translateX(0%)",
            end: "translateX(100%)",
          },
          img: {
            start: `translateX(${deltaImg})`,
            end: "translateX(0%)",
          },
        };
      default:
        throw new Error("direction not valide");
    }
  };

  useEffect(() => {
    if (visible) {
      controls.start("visible");
    }
  }, [controls, visible]);

  const variants = {
    visible: {
      transform: getTransforms().img.end,
    },
    hidden: {
      transform: getTransforms().img.start,
    },
  };

  return (
    <motion.div
      sx={{
        overflow: "hidden",
        position: "relative",
        display: "inline-block",
        "&::before": {
          content: '""',
          backgroundColor: "secondary",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          zIndex: 2,
          transition: `transform 1.3s`,
          transform: visible ? getTransforms().overlay.end : getTransforms().overlay.start,
          willChange: "transform",
        },
      }}
    >
      <MotionUIImage
        animate={controls}
        variants={variants}
        initial="hidden"
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        src={src}
        sx={{ maxWidth: "100%", height: "auto", display: "block" }}
        {...props}
      />
    </motion.div>
  );
};

export default ImageOverlay;
