import {
  Affix,
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

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

function Footer() {
  const theme = useMantineTheme();
  const [scroll, scrollTo] = useWindowScroll();
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <Container
      py={32}
      sx={{
        backgroundColor: theme.colorScheme === "dark" ? "black" : "lightgrey",
      }}
      fluid
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
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              radius="xl"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              color={theme.colorScheme === "dark" ? "gray" : "dark"}
              className="box-shadow"
            >
              <IconArrowUp size={16} />
            </Button>
          )}
        </Transition>
      </Affix>
    </Container>
  );
}
