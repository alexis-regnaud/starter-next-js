import React from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import { UIContainer, UIFlex, UIFlexProps } from "./index";
import { Parallax } from "../animate";

/** @jsx jsx */

export type UIBlocProps = UIFlexProps & {
  size?: string;
  minHeight?: string | number;
  image?: string | undefined;
  parallax: boolean;
};

const UIBloc = React.forwardRef(
  (
    {
      children,
      image = undefined,
      size = "container",
      minHeight = 570,
      parallax = false,
      sx,
      ...props
    }: UIBlocProps,
    ref
  ) =>
    parallax ? (
      <Parallax
        bgImage={image}
        strength={300}
        blur={{ min: -1, max: 3 }}
        sx={{ width: "100%" }}
        disabled={!parallax}
      >
        <UIFlex
          ref={ref}
          sx={{ height: minHeight, paddingTop: "50px", paddingBottom: "50px", ...sx }}
          {...props}
        >
          <UIContainer sx={{ maxWidth: size }}>{children}</UIContainer>
        </UIFlex>
      </Parallax>
    ) : (
      <UIFlex
        ref={ref}
        sx={{
          // set this to `minHeight: '100vh'` for full viewport height
          minHeight,
          backgroundImage: image ? `url(${image})` : "none",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "50px",
          paddingBottom: "50px",
          ...sx,
        }}
        {...props}
      >
        <UIContainer sx={{ maxWidth: size }}>{children}</UIContainer>
      </UIFlex>
    )
);

const MotionUIBloc = motion.custom(UIBloc);
export { UIBloc, MotionUIBloc };
