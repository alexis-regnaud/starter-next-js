import { Children, ReactNode } from "react";
import { RangeProp, DynamicRangeProp } from "./types";

/**
 * Extracts children with type Background from others and returns an object with both arrays:
 *  {
 *      bgChildren: bgChildren, // typeof child === 'Background'
 *      children: children // rest of this.props.children
 *   }
 */
interface SplitChildrenResultType {
  bgChildren: Array<ReactNode>;
  children: Array<ReactNode>;
}
interface SplitChildrenProps {
  children: ReactNode;
}

export function getSplitChildren(
  childrenProps: SplitChildrenProps | undefined
): SplitChildrenResultType | null {
  let bgChildren = [];

  const children = Children.toArray(childrenProps);
  children.forEach((child, index) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const c = child;
    if (c.type && c.type.isParallaxBackground) {
      bgChildren = bgChildren.concat(children.splice(index, 1));
    }
  });
  return {
    bgChildren,
    children,
  };
}

export const getHasDynamicRange = (range: RangeProp) =>
  typeof range === "object" && range.min !== undefined && range.max !== undefined;

export const getBlurValue = (isDynamic: boolean, blur: RangeProp, percentage: number) => {
  return isDynamic
    ? (blur as DynamicRangeProp).min + (1 - percentage) * (blur as DynamicRangeProp).max
    : blur;
};

export const getScaleValueMax = (isDynamic: number, scale: RangeProp, percentage: number) => {
  return isDynamic ? [(scale as DynamicRangeProp).min, (scale as DynamicRangeProp).max] : scale;
};

export function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
