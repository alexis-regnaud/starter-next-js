import React from "react";

export interface UIConditionalWrapperProps {
  condition: boolean;
  wrapper: React.FunctionComponent<React.ReactNode>;
  children: React.ReactNode;
}

export default function UIConditionalWrapper({ condition, wrapper, children }: UIConditionalWrapperProps) {
  if (!wrapper || !children) {
    throw new Error("Wrapper or Children cannot be null or undefined");
  }
  return condition ? wrapper(children) : children;
}
