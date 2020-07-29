import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
}

function ParallaxBackground({ children }: BackgroundProps) {
  return <div>{children}</div>;
}

ParallaxBackground.isParallaxBackground = true;

export default ParallaxBackground;
