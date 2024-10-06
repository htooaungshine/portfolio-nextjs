import SectionTitle from "@/components/SectionTitle";
import {
  Box,
  Center,
  Container,
  Group,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconCode, IconDeviceLaptop, IconKeyboard } from "@tabler/icons-react";

type Gear = {
  icon: JSX.Element;
  text: string;
};

const gears: Gear[] = [
  {
    icon: <IconDeviceLaptop size={64} />,
    text: "MacBook",
  },
  {
    icon: <IconCode size={64} />,
    text: "VS Code",
  },
];

export default function MyGear() {
  const theme = useMantineTheme();
  return (
    <Box bg={theme.colorScheme === "dark" ? "dark" : "gray.0"} py={32}>
      <Container>
        <SectionTitle title="my gear" />
        <Group grow>
          {gears.map((gear) => (
            <Box>
              <Center>{gear.icon}</Center>
              <Center>
                <Text size="lg">{gear.text}</Text>
              </Center>
            </Box>
          ))}
        </Group>
      </Container>
    </Box>
  );
}
