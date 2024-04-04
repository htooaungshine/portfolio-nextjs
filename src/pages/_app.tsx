import { AppProps } from "next/app";
import Head from "next/head";
import { Flex, Global, MantineProvider } from "@mantine/core";
import { AppStore } from "../lib/store";
import { useEffect, useRef, useState } from "react";
import RootLayout from "../components/RootLayout";
import PageLoader from "../components/PageLoader";

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
          boxShadow:
            theme.colorScheme === "dark"
              ? "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
              : "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
        },
      })}
    />
  );
}

export default function App(props: AppProps) {
  const {
    colorScheme,
    setColorScheme,
    setShowAffix,
    scrollToTop,
    setScrollToTop,
  } = AppStore((store) => ({
    colorScheme: store.colorScheme,
    setColorScheme: store.setColorScheme,
    setShowAffix: store.setShowAffix,
    scrollToTop: store.scrollToTop,
    setScrollToTop: store.setScrollToTop,
  }));

  const boxRef = useRef<HTMLDivElement>(null);
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
    const doneLoading = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", doneLoading);
    }

    return () => window.removeEventListener("load", doneLoading);
  }, []);

  const handleScroll = () => {
    if (!boxRef.current) return;
    if (boxRef.current.scrollTop > 20) setShowAffix(true);
    if (boxRef.current.scrollTop < 21) setShowAffix(false);
  };

  useEffect(() => {
    if (!boxRef.current) return;
    if (scrollToTop) boxRef.current.scrollTo({ top: 0, behavior: "smooth" });
    setScrollToTop(false);
  }, [scrollToTop]);

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
          colorScheme: "dark",
        }}
      >
        <CustomFont />
        <GlobalStyles />
        <Flex
          h="100vh"
          sx={{
            overflowY: loading ? "hidden" : "auto",
            position: "relative",
            backfaceVisibility: "hidden",
            zIndex: 1,
          }}
          onScroll={handleScroll}
          ref={boxRef}
          direction="column"
          wrap="nowrap"
        >
          <PageLoader loading={loading} />
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </Flex>
      </MantineProvider>
    </>
  );
}
