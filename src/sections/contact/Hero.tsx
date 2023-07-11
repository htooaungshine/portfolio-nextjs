import {
  Anchor,
  BackgroundImage,
  Box,
  Text,
  Container,
  Divider,
  Group,
  ThemeIcon,
  Title,
} from "@mantine/core";
import Navbar from "../Nav";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandStackoverflow,
} from "@tabler/icons-react";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <BackgroundImage src="/assets/img/Hero.png">
      <Navbar />
      <Container py={128}>
        <Box>
          <Divider
            color="white"
            label={
              <Title
                ff="Montserrat Alternates"
                color="white"
                weight={700}
                my={16}
              >
                contact me
              </Title>
            }
          />
          <Text color="white" my={16}>
            Reach out to me at my socials below
          </Text>
          <Group py={16}>
            <Anchor
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100015288370073"
            >
              <ThemeIcon size={64} radius="xl">
                <IconBrandFacebook />
              </ThemeIcon>
            </Anchor>

            <Anchor
              target="_blank"
              href="https://www.linkedin.com/in/aaron-kst"
            >
              <ThemeIcon size={64} radius="xl">
                <IconBrandLinkedin />
              </ThemeIcon>
            </Anchor>

            <Anchor target="_blank" href="https://github.com/Aaronkst">
              <ThemeIcon size={64} radius="xl">
                <IconBrandGithub />
              </ThemeIcon>
            </Anchor>

            <Anchor
              target="_blank"
              href="https://stackoverflow.com/users/21072674/aaron-dev"
            >
              <ThemeIcon size={64} radius="xl">
                <IconBrandStackoverflow />
              </ThemeIcon>
            </Anchor>
          </Group>
        </Box>
      </Container>
    </BackgroundImage>
  );
}
