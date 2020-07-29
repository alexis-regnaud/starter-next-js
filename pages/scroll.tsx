import * as React from "react";
import { useEffect, useState } from "react";
import { motion, useViewportScroll, useSpring, useTransform, motionValue } from "framer-motion";
import dynamic from "next/dynamic";
import ContentPlaceholder from "../components/ContentPlaceholder";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/ScrollItem"), { ssr: false });

export default function Example() {
  return (
    <>
      <Actions />
      <TestScroll />
      <DynamicComponentWithNoSSR />
    </>
  );
}

function TestScroll() {
  // Create a MotionValue to track contentOffsetY
  const contentOffsetY = motionValue(0);

  // Listen for changes to contentOffsetY
  contentOffsetY.onChange((offset) => {
    console.log(offset);
  });

  return <div>test</div>;
}

function Actions() {
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <motion.div
      className="actions"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <button>
        <span className="fas fa-share-square" />
      </button>
      <button>
        <span className="fas fa-user" />
      </button>
      <button>
        <span className="fas fa-times" />
      </button>
    </motion.div>
  );
}
