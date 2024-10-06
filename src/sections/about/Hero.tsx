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
                about me
              </Title>
            }
          />
          <Title order={3} color="white" my={16}>
            I am a DevOps Engineer.
          </Title>
          <Text color="white" align="justify">
            Results-oriented DevOps and Cloud Engineer having 4 years of experience in FinTech and
Banking industries with a hands-on experience in dealing with automation technologies like
CI/CD, containerization, configuration and infrastructure management. Specialized in
managing and architecting large-scale system architecture and cloud infrastructure. Passionate about digital transformation and assisting many business owners with their
reliable, secure and cost-effective cloud infrastructure. I frequently contribute to open-
source projects and serve as a mentor and coach for newcomers in the field.
          </Text>
        </Box>
      </Container>
    </BackgroundImage>
  );
}
