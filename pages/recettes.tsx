/* pages/index.js */
import React from "react";
import { jsx } from "theme-ui";
import { useScroll } from "react-use";
import { OverlayRoute } from "../components/animate";
import { UIBloc, UIContainer, UIHeading, UIText } from "../components/ui";
import DoubleCarousel from "../components/animate/DoubleCarousel";
import ReversedColumn from "../components/animate/ReversedColumn";
import ReversedColumn2 from "../components/animate/ReversedColumn2";

/** @jsx jsx */

export default function Recettes() {
  return (
    <OverlayRoute>
      <Page>
        {/*        <UIBloc image="/img-home.png" minHeight="100vh" size="containerXs">
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
                Contact & Visites
              </UIText>
              <UIHeading as="h1" variant="h1" color="white">
                Contactez-nous
              </UIHeading>
            </TitleContainer>
          </UIContainer>
        </UIBloc> */}

        <div style={{ height: 500 }} />

        <DoubleCarousel />
        {/*      <ReversedColumn2 /> */}
        {/* <ReversedColumn /> */}
      </Page>
    </OverlayRoute>
  );
}

export async function getStaticProps() {
  return {
    props: { header: { isDynamique: false, isLight: true } },
  };
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
      paddingTop: 66,
    }}
  />
);
