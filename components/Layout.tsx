/* /components/Layout.js */

import React from "react";
import Head from "next/head";
import { destroyCookie } from "nookies";
import { Container } from "@material-ui/core";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  const handleSignOut = () => {
    //  destroyCookie("", "token");
    window.location.reload();
  };

  const title = "Welcome to Nextjs";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <Navigation />
      <Container>{children}</Container>
    </div>
  );
}
