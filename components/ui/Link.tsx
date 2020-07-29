import React from "react";
import { Link, LinkProps } from "theme-ui";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { UIButton } from "./Button";
import DelayLink from "../DelayLink";
import usePageTransitionContext from "../pageTransition/usePageTransition";

export type UILinkProps = LinkProps & {
  delay?: number;
  href: string;
  type?: string;
  scroll?: boolean;
  replace?: boolean;
};

const UILink = React.forwardRef(
  (
    {
      children,
      delay = 1000,
      as,
      type = "a",
      href,
      sx,
      scroll = false,
      replace = false,
      ...props
    }: UILinkProps,
    ref
  ) => {
    const { handleRouteTransitionStart } = usePageTransitionContext();

    return delay === 0 ? (
      <NextLink href={href} as={as} scroll={scroll} replace={replace} passHref>
        {type === "button" ? (
          <UIButton ref={ref} onClick={handleRouteTransitionStart} sx={sx} {...props}>
            {children}
          </UIButton>
        ) : (
          <Link
            ref={ref}
            onClick={handleRouteTransitionStart}
            sx={{ display: "inline-block", ...sx }}
            {...props}
          >
            {children}
          </Link>
        )}
      </NextLink>
    ) : (
      <DelayLink delay={delay} href={href} as={as} replace={replace}>
        {type === "button" ? (
          <UIButton ref={ref} onClick={handleRouteTransitionStart} sx={sx} {...props}>
            {children}
          </UIButton>
        ) : (
          <Link
            ref={ref}
            onClick={handleRouteTransitionStart}
            sx={{ display: "inline-block", ...sx }}
            {...props}
          >
            {children}
          </Link>
        )}
      </DelayLink>
    );
  }
);

const MotionUILink = motion.custom(UILink);
export { UILink, MotionUILink };
