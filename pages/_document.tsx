import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import { ThemeProvider } from "theme-ui";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ height: "100%" }}>
        <Head>
          {/* PWA primary color */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Alegreya" rel="stylesheet" type="text/css" />
          <style>{`
            #__next { height: 100% }
          `}</style>
        </Head>
        <body style={{ height: "100%" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {flush() || null}
        </>
      ),
    };
  } finally {
  }
};
