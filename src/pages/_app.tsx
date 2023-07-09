import { AppProps } from "next/app";
import Head from "next/head";
import { Global, LoadingOverlay, MantineProvider } from "@mantine/core";
import { AppStore } from "../../lib/store";
import { useEffect } from "react";

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
            src: `url('/assets/fonts/SFProDisplay-Regular.ttf')`,
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
          ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
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
  const { loading, setLoading, colorScheme, setColorScheme } = AppStore(
    (store) => ({
      loading: store.loading,
      setLoading: store.setLoading,
      colorScheme: store.colorScheme,
      setColorScheme: store.setColorScheme,
    })
  );
  const { Component, pageProps } = props;

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Aaron Chen | Portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withNormalizeCSS
        theme={{
          colorScheme,
          fontFamily: "SF Pro Display",
        }}
      >
        <CustomFont />
        <GlobalStyles />
        {loading ? (
          <LoadingOverlay
            visible
            loaderProps={{ size: "xl", variant: "bars" }}
            overlayBlur={4}
          >
            <Component {...pageProps} />
          </LoadingOverlay>
        ) : (
          <Component {...pageProps} />
        )}
      </MantineProvider>
    </>
  );
}
