/* _app.js */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache, NormalizedCacheObject } from "apollo-boost";
import { parseCookies } from "nookies";
import { AppProps } from "next/app";
import { Router } from "next/router";
import { ThemeProvider, jsx } from "theme-ui";
import { motion, AnimatePresence } from "framer-motion";
import disableScroll from "disable-scroll";
import NProgress from "nprogress"; // nprogress module
import Layout from "../components/Layout";
import theme from "../styles/theme";
import "react-multi-carousel/lib/styles.css";
import "../styles/nprogress.css"; // styles of nprogress
import { usePageTransition, PageTransitionProvider } from "../components/pageTransition/usePageTransition";

/** @jsx jsx */

interface AppPropsType extends AppProps {
  apollo: ApolloClient<NormalizedCacheObject>;
  isAuthenticated: boolean;
}

const App = ({ Component, pageProps, apollo, isAuthenticated, router }: AppPropsType) => {
  const methods = usePageTransition();
  const {
    isTransitioning,
    handleRouteChangeStart,
    handleRouteChangeComplete,
    handleRouteChangeError,
  } = methods;

  // Remove the server-side generated CSS
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return (
    <ApolloProvider client={apollo}>
      <Head>{/* Header */}</Head>
      <ThemeProvider theme={theme}>
        <PageTransitionProvider value={methods}>
          <div>
            <Layout isAuthenticated={isAuthenticated} {...pageProps}>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.pathname} />
              </AnimatePresence>
            </Layout>
            <AnimatePresence>
              {isTransitioning && (
                <motion.div
                  initial={{ opacity: 1, y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, transition: { ease: "easeInOut", duration: 0.8 } }}
                  transition={{ duration: 0.9, ease: [0.8, 0, 0.2, 1] }}
                  sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "secondary",
                    pointerEvents: "none",
                    zIndex: 2000,
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </PageTransitionProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default withApollo(({ initialState, ctx }) => {
  return new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache().restore(initialState || {}),
    request: (operation) => {
      const cookies = parseCookies(ctx);
      console.log("cookies", cookies);

      operation.setContext({
        headers: {
          authorization: cookies && cookies.token ? `Bearer ${cookies.token}` : "",
        },
      });
    },
  });
})(App);
