import React, { useEffect } from "react";
import { jsx, BoxProps } from "theme-ui";
import { motion, MotionProps, useAnimation, Variants } from "framer-motion";

/** @jsx jsx */

export type StaggerChildrenProps = BoxProps &
  MotionProps & {
    delay?: number;
    visible: boolean;
    children: ((props: { variants: Variants }) => JSX.Element) | JSX.Element;
    variantsChildren?: Variants;
  };

const StaggerChildren = ({
  children,
  delay = 0.4,
  visible = false,
  variantsChildren,
  sx,
  ref,
  ...props
}: StaggerChildrenProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (visible) {
      controls.start("visible");
    }
  }, [controls, visible]);

  const variants = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: delay,
      },
    },
    hidden: {
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <motion.div animate={controls} variants={variants} initial="hidden" {...props}>
      {variantsChildren ? children({ variants: variantsChildren }) : children}
    </motion.div>
  );
};

export default StaggerChildren;
