/* pages/index.js */
import React, { useEffect, useState } from "react";
import { jsx, Box, Grid } from "theme-ui";
import { useRouter } from "next/router";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  UIContainer,
  UIFlex,
  UIHeading,
  UIText,
  UIAspectRatio,
  UIButton,
  UIImage,
} from "../../../components/ui";
import BlocNewsletter from "../../../components/BlocNewsletter";
import BlocFreeShipping from "../../../components/BlocFreeShipping";
import { products } from "../../../data/products";
import { MotionProductCard } from "../../../components/catalogue/ProductCard";
import { SVGCart } from "../../../components/svg";
import useQueryRoutePersist from "../../../hooks/useQueryRoutePersist";
import OverlayRoute from "../../../components/animate/OverlayRoute";

/** @jsx jsx */

export default function Product() {
  const { id, categories: category } = useQueryRoutePersist();
  const product = products.find((productItem) => productItem.id === Number(id));

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  if (!category || !product) return null;

  return (
    <OverlayRoute>
      <Page>
        <UIContainer>
          <Grid gap={0} columns={[1, 2, 2]}>
            <UIAspectRatio ratio={1 / 1}>
              <UIImage src="/produits/02-g.png" sx={{ height: "100%" }} />
            </UIAspectRatio>
            <Box>
              <UIHeading variant="h3" fontWeight="semiBold">
                {product.title}
              </UIHeading>
              <UIText variant="text3" color="primary" fontFamily="alegreya">
                50ml - Huile d’olive extra-vierge
              </UIText>
              <UIText
                variant="text2"
                fontWeight="semiBold"
                color="primary"
                sx={{ marginTop: 25, marginBottom: 25 }}
              >
                ${product.price}
              </UIText>
              <UIText variant="text3" fontWeight="medium" fontFamily="alegreya">
                <UIText as="span" fontWeight="semiBold" fontFamily="alegreya">
                  Terra Alba
                </UIText>{" "}
                est une huile d’olive issue de la variété arbequina et extraite selon des procédés
                traditionnels. Pour conserver toutes ses propriétés, elle n’est pas filtrée avant la mise en
                bouteille
                <br />
                <br />
                Elle sera parfaite en assaisonnement de salades, pizzas et pâtes.
              </UIText>
              <UIButton variant="secondary" endIcon={<SVGCart />} sx={{ marginTop: 50 }}>
                Ajouter au panier
              </UIButton>
            </Box>
          </Grid>
        </UIContainer>
        <UIFlex
          sx={{
            marginTop: 170,
            marginBottom: 60,
          }}
        >
          <UIHeading variant="h2">Produits similaires</UIHeading>
          <Grid gap={3} columns={[1, 3, 3]}>
            {products.slice(0, 3).map((item, i) => (
              <InView key={item.id} triggerOnce rootMargin="80px 0px" threshold={0}>
                {({ inView, ref }) => (
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
        </UIFlex>
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
