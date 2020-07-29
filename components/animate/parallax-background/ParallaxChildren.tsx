import React from "react";

interface ParallaxChildrenProps {
  children: React.ReactNode;
}

const ParallaxChildren = React.forwardRef(({ children }: ParallaxChildrenProps, ref) => (
  <div ref={ref} style={{ position: "relative" }}>
    {children}
  </div>
));

export default ParallaxChildren;
