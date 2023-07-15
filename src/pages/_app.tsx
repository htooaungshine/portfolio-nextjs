import { AppProps } from "next/app";
import Head from "next/head";
import { Global, LoadingOverlay, MantineProvider } from "@mantine/core";
import { AppStore } from "../lib/store";
import { useEffect, useState } from "react";
import RootLayout from "../components/RootLayout";
import PageLoader from "@/components/PageLoader";

function CustomFont() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Montserrat Alternates",
            src: `url('/assets/fonts/MontserratAlternates-Regular.ttf')`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Montserrat Alternates",
            src: `url('/assets/fonts/MontserratAlternates-Bold.ttf')`,
            fontWeight: 700,
            fontStyle: "bold",
          },
        },
        {
          "@font-face": {
            fontFamily: "SF Pro Display",
            src: `url('/assets/fonts/SFProDisplay.ttf')`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        body: {
          fontFamily: "SF Pro Display",
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          lineHeight: 1.5,
        },
        ".inline-icon": {
          display: "inline-flex",
          alignSelf: "center",
          height: "1em",
          width: "1em",
          top: ".125em",
          position: "relative",
        },
        ".text-shadow": {
          textShadow: "0px 4px 8px #000",
        },
        ".box-shadow": {
          boxShadow: "0px 4px 4px #000",
        },
      })}
    />
  );
}

export default function App(props: AppProps) {
  const { colorScheme, setColorScheme } = AppStore((store) => ({
    colorScheme: store.colorScheme,
    setColorScheme: store.setColorScheme,
  }));
  const { Component, pageProps } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("colorScheme");
    if (!savedTheme) {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        setColorScheme("dark");
      } else {
        setColorScheme("light");
      }
    } else {
      setColorScheme(savedTheme as typeof colorScheme);
    }
  }, []);

  useEffect(() => {
    const doneLoading = () => {
      if (document.readyState === "complete") {
        fetch("/assets/img/Hero.png").then(() => setLoading(false));
      } else {
        document.addEventListener("readystatechange", doneLoading);
      }
    };

    const init = setTimeout(doneLoading, 1000);

    return () => {
      document.removeEventListener("readystatechange", doneLoading);
      clearTimeout(init);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Aaron Chen | Portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/assets/img/logo-white.png" sizes="any" />
      </Head>

      <MantineProvider
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <CustomFont />
        <GlobalStyles />
        {loading ? (
          <PageLoader />
        ) : (
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        )}
      </MantineProvider>
    </>
  );
}
