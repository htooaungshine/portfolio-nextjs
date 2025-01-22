import { Anchor, Group, Image, Switch, useMantineTheme } from "@mantine/core";
import {
  IconSun,
  IconMoonStars,
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
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
    localStorage.setItem(
      "colorScheme",
      colorScheme === "dark" ? "light" : "dark"
    );
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

type NavbarProps = {
  footer?: boolean;
};

export default function Navbar({ footer }: NavbarProps) {
  return (
    <>
      <Group spacing={16} position={footer ? "right" : "center"} p={16}>
        {!footer && (
          <Anchor href="/">
            <Image
              src="/assets/img/logo-white.png"
              width={64}
              radius="xl"
              alt="logo"
            />
          </Anchor>
        )}
        <Anchor size={16} color={!footer ? "white" : undefined} href="/about">
          About
        </Anchor>
        <Anchor size={16} color={!footer ? "white" : undefined} href="/projects">
          Projects
        </Anchor>
        <Anchor size={16} color={!footer ? "white" : undefined} href="/contact">
          Contact
        </Anchor>
        <Anchor
          color={!footer ? "white" : undefined}
          href="https://github.com/htooaungshine"
          target="_blank"
        >
          <IconBrandGithub className="inline-icon" />
        </Anchor>
        <Anchor
          color={!footer ? "white" : undefined}
          href="https://www.linkedin.com/in/htooaungshine/"
          target="_blank"
        >
          <IconBrandLinkedin className="inline-icon" />
        </Anchor>
        <Anchor
          color={!footer ? "white" : undefined}
          href="mailto:htooaungshine19@gmail.com"
          target="_blank"
        >
          <IconMail className="inline-icon" />
        </Anchor>
      </Group>
    </>
  );
}
