import {
  BackgroundImage,
  Box,
  Code,
  Container,
  Divider,
  Text,
  Title,
} from "@mantine/core";
import Navbar from "../Nav";
import { useMediaQuery } from "@mantine/hooks";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <BackgroundImage src="/assets/img/Hero.png">
      <Navbar />
      <Container py={128}>
        <Box maw={!isMobile ? "35vw" : undefined}>
          <Divider
            color="white"
            label={
              <Title
                ff="Montserrat Alternates"
                color="white"
                weight={700}
                my={16}
              >
                about me
              </Title>
            }
          />
          <Title order={3} color="white" my={16}>
            I am a Fullstack Developer from Yangon, Myanmar.
          </Title>
          <Text color="white">
            Starting my career at 2019, my prominent development language is{" "}
            <Code>Javascript/Typescript</Code> and most of my professional works
            have been with <Code>Node.js</Code> and <Code>React.js</Code>. With
            that said, I have taken part in lightweight projects with other
            languages as well. When I'm not writing any codes or researching new
            techs, you can find me gaming or watching movies.
          </Text>
        </Box>
      </Container>
    </BackgroundImage>
  );
}
