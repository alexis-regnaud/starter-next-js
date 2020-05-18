/* hooks/useAuth.js */

import React from "react";
import Router from "next/router";

import { getUserFromServerCookie, getUserFromLocalCookie } from "../lib/auth";

function useAuth () {
    useEffect(() => {
        window.addEventListener("storage", logout, false);
        return () => {
            window.removeEventListener("storage", logout, false);
        }
    }, [logout])

    const logout = eve => {
      if (eve.key === "logout") {
        Router.push(`/?logout=${eve.newValue}`);
      }
    };
  };

// This gets called on every request
export async function getServerSideProps({req}) {
    const loggedUser = process.browser
    ? getUserFromLocalCookie()
    : getUserFromServerCookie(req);
  const pageProps = Page.getInitialProps && Page.getInitialProps(req);
  console.log("is authenticated");
  console.log(loggedUser);
  let path = req ? req.pathname : "";
  path = "";

    // By returning { props }, the Blog component
    // will receive `posts` as a prop at build time
  return {
    ...pageProps,
    loggedUser,
    currentUrl: path,
    isAuthenticated: !!loggedUser
  };
}

export default useAuth;