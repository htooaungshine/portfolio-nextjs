import { Badge, Box, Container, Text, Timeline } from "@mantine/core";
import SectionTitle from "../../components/SectionTitle";
import { IconCode } from "@tabler/icons-react";

type Career = {
  title: string;
  description: string;
  duration: [string, string];
};

const careers: Career[] = [
  {
    title: "Junior System Analyst @ BLife, Myanmar",
    description:
      "Build a digital wallet chatbot on Viber Platform using Node.js. Implement new features and maintain the system.",
    duration: ["Mar, 2019", "Sept, 2020"],
  },
  {
    title: "Developer @ Aya Innovation Labs, Myanmar",
    description:
      "Build standalone webapps to be integrated into a digital wallet app. Onboard new payment partners and maintain partner portal. Dockerize apps and implement new features",
    duration: ["Sept, 2019", "Dec, 2022"],
  },
  {
    title: "Software Engineer @ X Inc, Japan",
    description:
      "Help build and implement attractive features to create a virtual shopping experience using React Three Fiber for various types of shops. Implement a UI to allow real-time editing in the 3D world for efficient shop management and world building",
    duration: ["Jan, 2023", "Present"],
  },
];

export default function Career() {
  return (
    <Container my={32}>
      <SectionTitle title="my career" />
      <Box my={16}>
        <Timeline active={careers.length} bulletSize={24}>
          {careers.map((career, i) => (
            <Timeline.Item
              bullet={<IconCode size="1rem" />}
              title={<Text weight={700}>{career.title}</Text>}
              key={`career-${i}`}
            >
              <Text color="dimmed" size="sm">
                {career.description}
              </Text>
              <Text size="xs" mt={4}>
                <Badge>{career.duration[0]}</Badge>
                <Text component="span" mx={3}>
                  ~
                </Text>
                <Badge>{career.duration[1]}</Badge>
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
}
