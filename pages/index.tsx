/* pages/index.js */
import React from "react";
import { motion } from "framer-motion";
import { jsx, Grid, Box } from "theme-ui";
import { InView } from "react-intersection-observer";
import mergeRefs from "react-merge-refs";
import Link from "next/link";
import {
  UIBloc,
  UIHeading,
  UIText,
  UIContainer,
  UILink,
  UIButton,
  UICard,
  UICardActions,
  UICardContent,
  UIImage,
  MotionUIText,
  MotionUIHeading,
  MotionUILink,
} from "../components/ui";
import BlocNewsletter from "../components/BlocNewsletter";
import BlocFreeShipping from "../components/BlocFreeShipping";
import {
  ImageOverlay,
  ImageEntrance,
  OverlayRoute,
  StaggerChildren,
  entranceTranslate,
  entranceOpacity,
  entranceScale,
  mergeEntrances,
} from "../components/animate";

/** @jsx jsx */

export default function Home() {
  return (
    <OverlayRoute>
      <Page>
        <UIBloc image="/img-home.png" minHeight="100vh" size="containerXs">
          <UIContainer
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TitleContainer>
              <UIText
                variant="text2"
                fontFamily="alegreya"
                fontWeight="medium"
                color="white"
                sx={{
                  marginBottom: "10px",
                }}
              >
                Des produits de qualité supérieure
              </UIText>
              <UIHeading as="h1" variant="h1" color="white">
                Issus des meilleurs producteurs
              </UIHeading>
              <UIButton
                variant="secondary"
                sx={{
                  marginTop: "30px",
                }}
              >
                Voir nos produits
              </UIButton>
            </TitleContainer>
          </UIContainer>
        </UIBloc>
        <InView triggerOnce threshold={0.6}>
          {({ inView, ref, entry }) => (
            <UIBloc ref={ref} size="containerXs">
              <Grid gap={4} columns={[1, "1fr 2fr"]}>
                <Box sx={{ textAlign: "center" }}>
                  <ImageEntrance
                    variants={entranceOpacity()}
                    visible={inView}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    src="/svg/dessin-olives.svg"
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <StaggerChildren
                    visible={inView}
                    variantsChildren={mergeEntrances([entranceTranslate(), entranceOpacity()])}
                    sx={{ alignSelf: "center" }}
                  >
                    {({ variants }) => (
                      <>
                        <MotionUIHeading
                          variants={variants}
                          transition={{ duration: 0.8 }}
                          as="h2"
                          variant="h2"
                          style={{ marginBottom: "25px" }}
                        >
                          Saveur et authenticité
                        </MotionUIHeading>
                        <MotionUIText
                          variants={variants}
                          transition={{ duration: 0.8 }}
                          variant="text3"
                          color="primary"
                          fontFamily="alegreya"
                          sx={{ marginBottom: "25px" }}
                        >
                          Fondé en 2003 par deux épicuriens Olivier et Dominique, Olive & Dom travaille en
                          direct avec les producteurs afin d’offrir un produit authentique et véritable.
                        </MotionUIText>
                        <MotionUILink variants={variants} transition={{ duration: 0.8 }} href="/player-gear">
                          Nos Produit <UIImage src="/svg/arrow-right.svg" sx={{ marginLeft: 12 }} />
                        </MotionUILink>
                      </>
                    )}
                  </StaggerChildren>
                </Box>
              </Grid>
            </UIBloc>
          )}
        </InView>
        <InView triggerOnce threshold={0.7}>
          {({ inView, ref, entry }) => (
            <UIBloc ref={ref} size="containerXs" image="/img-terroir.png">
              <Grid gap={4} columns={[1, "2fr 1fr"]}>
                <Box sx={{ display: "flex" }}>
                  <StaggerChildren
                    visible={inView}
                    variantsChildren={mergeEntrances([entranceTranslate(), entranceOpacity()])}
                    sx={{ alignSelf: "center" }}
                  >
                    {({ variants }) => (
                      <>
                        <MotionUIHeading
                          variants={variants}
                          transition={{ duration: 0.8 }}
                          as="h2"
                          variant="h2"
                          style={{ marginBottom: "25px" }}
                        >
                          Terroir et savoir
                        </MotionUIHeading>
                        <MotionUIText
                          variants={variants}
                          transition={{ duration: 0.8 }}
                          variant="text3"
                          color="primary"
                          fontFamily="alegreya"
                          sx={{ marginBottom: "25px" }}
                        >
                          Nos producteurs et artisans ont toute notre admiration pour leur savoir-faire, leur
                          loyauté et la perfection de leur art. Nous espérons vous transmettre ce savoir afin
                          de vous aider à faire un choix juste et éclairé.
                        </MotionUIText>
                        <MotionUILink variants={variants} transition={{ duration: 0.8 }} href="/player-gear">
                          Où nous trouver ?<UIImage src="/svg/arrow-right.svg" sx={{ marginLeft: 12 }} />
                        </MotionUILink>
                      </>
                    )}
                  </StaggerChildren>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <ImageOverlay visible={inView} src="/img-2.png" />
                </Box>
              </Grid>
            </UIBloc>
          )}
        </InView>
        <InView triggerOnce threshold={0.7}>
          {({ inView, ref, entry }) => (
            <UIBloc ref={ref} size="containerXs" image="/bg-olives-2.png">
              <Grid gap={4} columns={[1, "1fr 2fr"]}>
                <Box sx={{ textAlign: "center" }}>
                  <ImageOverlay visible={inView} src="/img-3.png" direction="right" />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <StaggerChildren
                    visible={inView}
                    variantsChildren={mergeEntrances([entranceTranslate(), entranceOpacity()])}
                    sx={{ alignSelf: "center" }}
                  >
                    {({ variants }) => (
                      <>
                        <MotionUIText
                          variants={variants}
                          transition={{ duration: 0.8 }}
                          variant="text2"
                          color="primary"
                          fontFamily="alegreya"
                          sx={{ marginBottom: "25px" }}
                        >
                          À table !
                        </MotionUIText>
                        <MotionUIHeading
                          variants={variants}
                          transition={{ duration: 0.8 }}
                          as="h2"
                          variant="h2"
                          style={{ marginBottom: "25px" }}
                        >
                          Ajoutez saveur et raffinement à vos plats
                        </MotionUIHeading>
                        <MotionUILink variants={variants} transition={{ duration: 0.8 }} href="/player-gear">
                          Recettes
                          <UIImage src="/svg/arrow-right.svg" sx={{ marginLeft: 12 }} />
                        </MotionUILink>
                      </>
                    )}
                  </StaggerChildren>
                </Box>
              </Grid>
            </UIBloc>
          )}
        </InView>
        <InView triggerOnce threshold={0.7}>
          {({ inView, ref, entry }) => (
            <UIContainer ref={ref} sx={{ marginTop: "50px", marginBottom: "150px" }}>
              <Box
                sx={{
                  textAlign: "center",
                  maxWidth: "470px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "30px",
                }}
              >
                <UIHeading variant="h2">Nos produits</UIHeading>
                <UIText variant="text3" color="primary" fontFamily="alegreya">
                  Découvrez nos produits à base d’olives de qualité supérieure
                </UIText>
              </Box>
              <StaggerChildren visible={inView}>
                <Grid gap={3} columns={[1, 3, 3]}>
                  <UICard>
                    <ImageEntrance
                      visible={inView}
                      variants={entranceScale()}
                      transition={{ duration: 1.5 }}
                      src="/produit-1.png"
                    />
                    <UICardContent
                      sx={{
                        textAlign: "center",
                        marginTop: "15px",
                        marginBottom: 20,
                      }}
                    >
                      <UIHeading variant="h3" color="primary">
                        Olives de table
                      </UIHeading>
                      <UIText variant="text4" fontFamily="alegreya">
                        En dégustation pour l’apéritif ou pour aggrémenter vos plats, nos olives sont
                        préparées selon la méthode artisanale.
                      </UIText>
                    </UICardContent>
                    <UICardActions>
                      <UILink
                        type="button"
                        href="/catalogue/[categories]"
                        as="/catalogue/olives"
                        variant="secondary"
                        sx={{ width: "100%" }}
                      >
                        Voir les olives
                      </UILink>
                    </UICardActions>
                  </UICard>
                  <UICard>
                    <ImageEntrance
                      visible={inView}
                      variants={entranceScale()}
                      transition={{ duration: 1.5 }}
                      src="/produit-2.png"
                    />
                    <UICardContent
                      sx={{
                        textAlign: "center",
                        marginTop: "15px",
                        marginBottom: 20,
                      }}
                    >
                      <UIHeading variant="h3" color="primary">
                        Huiles d'olive
                      </UIHeading>
                      <UIText variant="text4" fontFamily="alegreya">
                        Notre sélection d’huiles d’olive extra-vierges, pour tous les jours, aromatisées ou
                        grands crus.
                      </UIText>
                    </UICardContent>
                    <UICardActions>
                      <UILink
                        type="button"
                        href="/catalogue/[categories]"
                        as="/catalogue/huiles"
                        variant="secondary"
                        sx={{ width: "100%" }}
                      >
                        Voir les huiles
                      </UILink>
                    </UICardActions>
                  </UICard>
                  <UICard>
                    <ImageEntrance
                      visible={inView}
                      variants={entranceScale()}
                      transition={{ duration: 1.5 }}
                      src="/produit-3.png"
                    />
                    <UICardContent
                      sx={{
                        textAlign: "center",
                        marginTop: "15px",
                        marginBottom: 20,
                      }}
                    >
                      <UIHeading variant="h3" color="primary">
                        Spécialités
                      </UIHeading>
                      <UIText variant="text4" fontFamily="alegreya">
                        Découvrez nos tapenades maison et nos produits d’accompagnement à base d’olives
                        premium.
                      </UIText>
                    </UICardContent>
                    <UICardActions>
                      <UILink
                        type="button"
                        href="/catalogue/[categories]"
                        as="/catalogue/specialites"
                        variant="secondary"
                        sx={{ width: "100%" }}
                      >
                        Voir les spécialités
                      </UILink>
                    </UICardActions>
                  </UICard>
                </Grid>
              </StaggerChildren>
            </UIContainer>
          )}
        </InView>
        <BlocNewsletter />
        <BlocFreeShipping />
      </Page>
    </OverlayRoute>
  );
}

const TitleContainer = (props) => (
  <div
    {...props}
    sx={{
      maxWidth: "700px",
      width: "100%",
      textAlign: "center",
    }}
  />
);

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
