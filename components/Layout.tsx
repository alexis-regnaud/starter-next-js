/* /components/Layout.js */

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { destroyCookie } from "nookies";
import Button from "@material-ui/core/Button";

export default function Layout({ children }) {
  const handleSignOut = () => {
    destroyCookie("", "token");
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
      <header>
        <div>
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>

          <Link href="/signin">
            <a className="nav-link">Sign In</a>
          </Link>

          <Link href="/signup">
            <a className="nav-link"> Sign Up</a>
          </Link>
          <Button variant="contained" color="primary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}
