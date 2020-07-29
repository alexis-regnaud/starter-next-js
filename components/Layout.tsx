/** @jsx jsx */

import React from "react";
import Head from "next/head";
import { destroyCookie } from "nookies";
import { jsx, Grid, Box } from "theme-ui";
import { UIText, UIContainer, UIFlex, UIHeading } from "./ui";
import { SVGFacebook, SVGGmail, SVGInstagram } from "./svg";
import Header, { HeaderProps } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  header: HeaderProps;
}

export default function Layout({ children, header }: LayoutProps) {
  const handleSignOut = () => {
    //  destroyCookie("", "token");
    window.location.reload();
  };

  const title = "Welcome to Nextjs";

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: 256,
        height: "100%",
        // backgroundImage: "url(/olives-bg.png)",
        // backgroundPosition: "center top",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "100% auto",
      }}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header {...header} />
      <Main>{children}</Main>
      <footer sx={{ paddingTop: 70, paddingBottom: 40 }}>
        <UIContainer size="md">
          <Grid gap={4} columns={[2, null, 4]}>
            <Box>
              <UIHeading variant="h4">Contact</UIHeading>
              <UIText variant="text6" fontWeight="medium">
                514 381-4020
                <br /> info@oliveetdom.com
              </UIText>
            </Box>
            <Box>
              <UIHeading variant="h4">Nous trouver</UIHeading>
              <UIText variant="text6" fontWeight="medium">
                <UIText as="span" fontWeight="semiBold">
                  Boutique Olive & Dom
                </UIText>
                <br />
                707, rue Saint Paul Ouest Montréal (Québec) H2R 1T1
              </UIText>
            </Box>
            <Box>
              <UIHeading variant="h4">Livraison</UIHeading>
              <UIText variant="text6" fontWeight="medium">
                Olive & Dom assure la livraison au Canada seulement de tous ses produits par le biais de
                Postes Canada. Les commandes sont traitées dans un délai de 24 à 48 h du lundi au vendredi.
              </UIText>
            </Box>
            <Box>
              <UIHeading variant="h4">Social</UIHeading>
              <UIFlex direction="row" positions={["space-between", "center"]} sx={{ width: 80 }}>
                <SVGInstagram color="secondary" />
                <SVGFacebook color="secondary" />
                <SVGGmail color="secondary" />
              </UIFlex>
            </Box>
          </Grid>
        </UIContainer>
        <UIFlex sx={{ marginTop: 70 }}>
          <UIText variant="text4">© Olive & Dom 2020. Tous droits réservés</UIText>
        </UIFlex>
      </footer>
    </div>
  );
}

const Main = (props) => (
  <main
    {...props}
    sx={{
      width: "100%",
      flex: "1 1 auto",
    }}
  />
);
