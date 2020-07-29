/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { jsx, useThemeUI } from "theme-ui";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";
import { UIFlex, MotionUILink, UILink, MotionUIText } from "./ui";
import { SVGFacebook, SVGGmail, SVGInstagram, SVGCart, SVGLogo } from "./svg";

export interface HeaderProps {
  isLight: boolean;
  isDynamique: boolean;
}

export default function Header({ isLight: defaultIsLight = false, isDynamique = true }: HeaderProps) {
  const [isLight, setIsLight] = useState(defaultIsLight);
  const { theme } = useThemeUI();
  const { y } = useWindowScroll();

  useEffect(() => {
    setIsLight(defaultIsLight);
  }, [defaultIsLight]);

  const borderColor = isLight ? "hsla(0,0%,82.4%,.5)" : "hsla(0,0%,100%,.5)";
  const color = isLight ? theme.colors?.text : "#ffffff";
  const transition = { duration: 0.3 };

  useEffect(() => {
    if (isDynamique) {
      setIsLight(y > 80);
    }
  }, [y]);

  return (
    <motion.header
      animate={{ backgroundColor: isLight ? theme.colors?.background : "rgba(0,0,0,0)" }}
      transition={transition}
      initial={false}
      sx={{
        height: 66,
        textAlign: "center",
        position: "fixed",
        borderBottom: "1px solid",
        borderColor,
        width: "100%",
        display: "flex",
        zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0)",
      }}
    >
      <UIFlex
        sx={{
          borderRight: "1px solid",
          borderColor,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <UILink as="/" href="/">
          <SVGLogo transition={transition} color={color} />
        </UILink>
      </UIFlex>
      <UIFlex
        positions={["flex-start", "center"]}
        direction="row"
        sx={{
          borderRight: "1px solid",
          borderColor,
          flexGrow: 1,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <div sx={{ paddingLeft: 15, paddingRight: 15 }}>
          <MotionUILink initial={false} animate={{ color }} transition={transition} variant="nav" href="/">
            <a>Une boutique engagée</a>
          </MotionUILink>
        </div>
        <div sx={{ paddingLeft: 15, paddingRight: 15 }}>
          <MotionUILink
            initial={false}
            animate={{ color }}
            transition={transition}
            variant="nav"
            href="/player-gear"
          >
            <a>Nos Produits</a>
          </MotionUILink>
        </div>
        <div sx={{ paddingLeft: 15, paddingRight: 15 }}>
          <MotionUILink
            initial={false}
            animate={{ color }}
            transition={transition}
            variant="nav"
            href="/recettes"
          >
            <a>Recettes</a>
          </MotionUILink>
        </div>
        <div sx={{ paddingLeft: 15, paddingRight: 15 }}>
          <MotionUILink
            initial={false}
            animate={{ color }}
            transition={transition}
            variant="nav"
            href="/contact"
          >
            <a>Contact</a>
          </MotionUILink>
        </div>
      </UIFlex>
      <UIFlex
        sx={{
          borderLeft: "1px solid",
          borderColor,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <UIFlex direction="row" positions={["space-between", "center"]} sx={{ width: 80 }}>
          <SVGInstagram transition={transition} color={color} />
          <SVGFacebook transition={transition} color={color} />
          <SVGGmail transition={transition} color={color} />
        </UIFlex>
      </UIFlex>
      <UIFlex
        sx={{
          borderLeft: "1px solid",
          borderColor,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <SVGCart transition={transition} color={color} />
      </UIFlex>
      <UIFlex
        sx={{
          borderLeft: "1px solid",
          borderColor,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <MotionUIText initial={false} animate={{ color }} transition={transition}>
          FR
        </MotionUIText>
      </UIFlex>
    </motion.header>
  );
}
