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
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail
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
              target="_blank" href="https://www.linkedin.com/in/htooaungshine/">
              <ThemeIcon size={64} radius="xl">
                <IconBrandLinkedin />
              </ThemeIcon>
            </Anchor>

            <Anchor target="_blank" href="https://github.com/htooaungshine">
              <ThemeIcon size={64} radius="xl">
                <IconBrandGithub />
              </ThemeIcon>
            </Anchor>

            <Anchor target="_blank" href="mailto:htooaungshine19@gmail.com">
              <ThemeIcon size={64} radius="xl">
                <IconMail />
              </ThemeIcon>
            </Anchor>
          </Group>
        </Box>
      </Container>
    </BackgroundImage>
  );
}
