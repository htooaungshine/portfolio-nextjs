import {
    BackgroundImage,
    Box,
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
                  Personal and Passionate
                </Title>
              }
            />
            <Text color="white" align="justify" size="lg" style={{ fontFamily: 'Montserrat Alternates', fontWeight: 500 }}>
            This section reflects the heart of my journey as a DevOps Engineer, showcasing projects that I’ve poured my dedication and creativity into. Each contribution tells a story of overcoming challenges, solving complex problems, and crafting solutions that matter. From designing resilient infrastructures to implementing seamless automation, these projects embody my passion for technology and my commitment to excellence.
            </Text>
          </Box>
        </Container>
      </BackgroundImage>
    );
  }