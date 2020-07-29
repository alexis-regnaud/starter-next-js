/* pages/index.js */
import React from "react";
import { jsx } from "theme-ui";
import { OverlayRoute } from "../components/animate";
import { UIBloc, UIButton, UIContainer, UIHeading, UILink, UIText } from "../components/ui";
import BlocNewsletter from "../components/BlocNewsletter";
import BlocFreeShipping from "../components/BlocFreeShipping";

/** @jsx jsx */

export default function Recettes() {
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
                Contact & Visites
              </UIText>
              <UIHeading as="h1" variant="h1" color="white">
                Contactez-nous
              </UIHeading>
            </TitleContainer>
          </UIContainer>
        </UIBloc>
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
