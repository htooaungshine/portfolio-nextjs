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
    title: "DevOps Engineer @ AYA Bank, Myanmar",
    description:
      "Manage and maintain cloud infrastructure for one of the largest mobile-wallet app in Myanmar, AYA-PAY wallet. Developed a Continuous Integration / Continuous Deployment (CI/CD) pipeline that improved system reliability and uptime.",
    duration: ["May, 2022", "Present"],
  },
  {
    title: "Senior System Engineer @ AYA Bank, Myanmar",
    description:
      "Managed and supported different Operation Support Systems (OSS) in a large and up-growing bank in Myanmar.Performed a performance bottleneck analysis and achieved application performance and average latency of critical systems up to 20% faster and with 99% availability time",
    duration: ["Nov, 2020", "April, 2022"],
  },
  {
    title: "System Administrator @ Shwe Bank, Myanmar",
    description:
      "Regularly check system logs, CPU usage, memory usage, and network performance to ensure optimal functioning. Customize internal systems to meet organizational needs and improve efficiency",
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
