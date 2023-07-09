import { BackgroundImage, Center, Text } from "@mantine/core";
import Navbar from "./Nav";

export default function Hero() {
  return (
    <BackgroundImage src="/assets/img/Hero.png">
      <Navbar />
      <Center mih="70vh">
        <div>
          <Text
            weight={700}
            color="white"
            ff="Montserrat Alternates"
            fs="bold"
            size={72}
            className="text-shadow"
          >
            Aaron Chen
          </Text>
          <Center>
            <Text color="white" ff="Montserrat Alternates" size={32}>
              Fullstack Developer
            </Text>
          </Center>
        </div>
      </Center>
    </BackgroundImage>
  );
}
