import React from "react";
import { Analytics } from "@vercel/analytics/react";

import Layout from "@/components/layout/layout";

import "@/styles/global.css";

import "@fontsource-variable/montserrat";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default App;
