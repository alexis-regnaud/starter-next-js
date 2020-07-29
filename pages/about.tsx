/* pages/index.js */
import React from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import Link from "next/link";

/** @jsx jsx */

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
      style={{ textAlign: "center" }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2 style={{ textAlign: "center" }}>About page</h2>
    </motion.div>
  );
}
