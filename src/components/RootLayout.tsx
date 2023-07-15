import {
  Affix,
  Box,
  Button,
  Container,
  Group,
  Text,
  Transition,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconArrowUp, IconCopyright } from "@tabler/icons-react";
import { ReactNode } from "react";
import Navbar from "../sections/Nav";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { AppStore } from "@/lib/store";

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  const theme = useMantineTheme();
  return (
    <>
      <Box bg={theme.colorScheme === "dark" ? "dark.7" : "white"} pb={32}>
        {children}
      </Box>
      <Footer />
    </>
  );
}

function Footer() {
  const theme = useMantineTheme();
  const { showAffix, setScrollToTop } = AppStore((store) => ({
    showAffix: store.showAffix,
    setScrollToTop: store.setScrollToTop,
  }));
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <Box
      py={32}
      bg={theme.colorScheme === "dark" ? "dark" : "gray.0"}
      sx={{
        display: "block",
        position: "sticky",
        top: "auto",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <Container>
        <Group grow={!isMobile}>
          <Text color="dimmed">
            <IconCopyright className="inline-icon" /> Aaron Chen
          </Text>
          <Navbar footer />
        </Group>
      </Container>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={showAffix}>
          {(transitionStyles) => (
            <Button
              radius="xl"
              style={transitionStyles}
              onClick={() => setScrollToTop(true)}
              color={theme.colorScheme === "dark" ? "gray" : "dark"}
              className="box-shadow"
            >
              <IconArrowUp size={16} />
            </Button>
          )}
        </Transition>
      </Affix>
    </Box>
  );
}
