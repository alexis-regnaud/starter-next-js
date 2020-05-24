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
      </Head>
      <Navigation />
      <Container>{children}</Container>
    </div>
  );
}
