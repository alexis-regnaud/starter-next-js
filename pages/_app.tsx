/* _app.js */
import React, { useEffect } from "react";
import Head from "next/head";
import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache, NormalizedCacheObject } from "apollo-boost";
import { parseCookies } from "nookies";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const theme = {
  primary: "green",
};

interface AppPropsType extends AppProps {
  apollo: ApolloClient<NormalizedCacheObject>;
  isAuthenticated: boolean;
}

const App = ({ Component, pageProps, apollo, isAuthenticated }: AppPropsType) => {
  // Remove the server-side generated CSS
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <ApolloProvider client={apollo}>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout isAuthenticated={isAuthenticated} {...pageProps}>
          <Component {...pageProps} />
        </Layout>
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
