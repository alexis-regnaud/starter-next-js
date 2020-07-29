import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface OverlayRouteProps {
  children: React.ReactNode;
}

const OverlayRoute = ({ children }: OverlayRouteProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default OverlayRoute;
