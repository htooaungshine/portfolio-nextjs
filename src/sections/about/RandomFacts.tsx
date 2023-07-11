import SectionTitle from "@/components/SectionTitle";
import { Container, List, ThemeIcon, Text } from "@mantine/core";
import {
  IconBallFootball,
  IconChefHat,
  IconLanguage,
  IconLineHeight,
  IconShirt,
} from "@tabler/icons-react";

type Fact = {
  icon: JSX.Element;
  text: string;
};

const facts: Fact[] = [
  {
    icon: <IconBallFootball size="1rem" />,
    text: "I love football and my favourite team is Liverpool",
  },
  {
    icon: <IconLineHeight size="1rem" />,
    text: "I'm exactly 6ft tall",
  },
  {
    icon: <IconChefHat size="1rem" />,
    text: "Food is my passion, but I can't cook",
  },
  {
    icon: <IconLanguage size="1rem" />,
    text: "I speak Fluent English and Burmese, Conversational Chinese and some Japanese",
  },
  {
    icon: <IconShirt size="1rem" />,
    text: "I love hoodies.. (who doesn't?). Sike! I prefer dressing smart",
  },
];

export default function RandomFacts() {
  return (
    <Container my={32}>
      <SectionTitle title="random facts" />
      <List spacing="xs" center>
        {facts.map((fact) => (
          <List.Item
            icon={
              <ThemeIcon size={24} radius="xl">
                {fact.icon}
              </ThemeIcon>
            }
          >
            <Text>{fact.text}</Text>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
