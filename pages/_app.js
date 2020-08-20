import React from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import Router from "next/router";

import SEO from "../next-seo.config";
import theme from "../components/theme";
import NProgress from "nprogress";

// Loading na vrhu prilikom menjanja rute i slicno
Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.set(0.5));
Router.events.on("routeChangeError", () => NProgress.done());

const components = {};

// Viewport u _app jer dobijam warning da ne moze u _document. Nice
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <ColorModeProvider>
          <CSSReset />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          </Head>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
