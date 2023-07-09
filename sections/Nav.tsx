import {
  Affix,
  Anchor,
  Button,
  Group,
  Switch,
  Transition,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import {
  IconSun,
  IconMoonStars,
  IconBrandGithub,
  IconMail,
  IconBrandStackoverflow,
  IconArrowUp,
} from "@tabler/icons-react";
import { AppStore } from "../lib/store";

function ThemeSwitcher() {
  const { colorScheme, setColorScheme } = AppStore((store) => ({
    colorScheme: store.colorScheme,
    setColorScheme: store.setColorScheme,
  }));

  const theme = useMantineTheme();

  const handleThemeChange = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Group position="center">
      <Switch
        size="md"
        color={theme.colorScheme === "dark" ? "gray" : "dark"}
        onLabel={
          <IconSun size="1rem" stroke={2.5} color={theme.colors.yellow[4]} />
        }
        offLabel={
          <IconMoonStars
            size="1rem"
            stroke={2.5}
            color={theme.colors.blue[6]}
          />
        }
        onChange={handleThemeChange}
        checked={colorScheme === "dark"}
      />
    </Group>
  );
}

export default function Navbar() {
  const [scroll, scrollTo] = useWindowScroll();
  const theme = useMantineTheme();

  return (
    <>
      <Group spacing={16} position="center" p={16}>
        <Anchor size={16} color="white" href="/about">
          About
        </Anchor>
        <Anchor size={16} color="white" href="/info">
          Info
        </Anchor>
        <Anchor
          color="white"
          href="https://github.com/Aaronkst"
          target="_blank"
        >
          <IconBrandGithub className="inline-icon" />
        </Anchor>
        <Anchor
          color="white"
          href="https://stackoverflow.com/users/21072674/aaron-dev"
          target="_blank"
        >
          <IconBrandStackoverflow className="inline-icon" />
        </Anchor>
        <Anchor
          color="white"
          href="mailto:dev.kst.aaron@gmail.com"
          target="_blank"
        >
          <IconMail className="inline-icon" />
        </Anchor>
        <ThemeSwitcher />
      </Group>
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
    </>
  );
}
