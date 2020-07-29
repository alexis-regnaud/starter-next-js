/* pages/index.js */
import React, { useEffect, useState } from "react";
import { jsx, Grid } from "theme-ui";
import { InView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { UICardActions, UIContainer, UIFlex, UIHeading, UILink } from "../../components/ui";
import { MotionProductCard } from "../../components/catalogue/ProductCard";
import BlocNewsletter from "../../components/BlocNewsletter";
import BlocFreeShipping from "../../components/BlocFreeShipping";
import { products } from "../../data/products";
import useQueryRoutePersist from "../../hooks/useQueryRoutePersist";
import OverlayRoute from "../../components/animate/OverlayRoute";

/** @jsx jsx */

const getCategoryName = (category: string | string[]) => {
  switch (category) {
    case "olives":
      return "olives";
      break;
    case "huiles":
      return "huiles d'olive";
      break;
    case "specialites":
      return "spécialités";
      break;
    default:
      throw new Error("Category invalide");
  }
};

export default function Category() {
  const { categories: category } = useQueryRoutePersist();
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: (i % 3) * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  if (!category) return null;

  return (
    <OverlayRoute>
      <Page>
        <UIContainer sx={{ paddingBottom: 120 }}>
          <UIFlex
            sx={{
              marginTop: 40,
              marginBottom: 60,
            }}
          >
            <UIHeading variant="h1">Nos {getCategoryName(category)}</UIHeading>
          </UIFlex>
          <Grid gap={3} columns={[1, 3, 3]}>
            {products.map((item, i) => (
              <InView key={item.id} triggerOnce threshold={0.7}>
                {({ inView, ref, entry }) => (
                  <div ref={ref}>
                    <MotionProductCard
                      custom={i}
                      animate={inView ? "visible" : "hidden"}
                      variants={variants}
                      initial="hidden"
                      sx={{ opacity: 0 }}
                      item={item}
                    />
                  </div>
                )}
              </InView>
            ))}
          </Grid>
        </UIContainer>
        <BlocNewsletter />
        <BlocFreeShipping />
      </Page>
    </OverlayRoute>
  );
}

const Page = (props) => (
  <div
    {...props}
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: 256,
    }}
  />
);
