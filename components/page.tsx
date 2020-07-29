import React from "react";

export default function Page({ children }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Layout</h1>
      <main>{children}</main>
    </>
  );
}
