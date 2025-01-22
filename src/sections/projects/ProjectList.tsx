import { Container, Group, Box, Text, Image, Anchor } from "@mantine/core";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    name: "AYA PAY Digital Wallet",
    image: "/assets/img/projects/AYAPAY.png",
    description: "AyaPay Wallet is a mobile payment and digital wallet service typically associated with Aya Bank, a major financial institution in Myanmar",
    url: "https://shorturl.at/jvS1k",
  },
  // {
  //   name: "AYAPAY",
  //   image: "/assets/img/projects/AYAPAY-Kabar.png",
  //   description: "Description of Project One.",
  //   url: "https://www.projectone.com",
  // },
  // Add more projects as needed
];

export default function ProjectList() {
  return (
    <Container my={32}>
      <SectionTitle title="My Projects" />
      <Group grow>
        {projects.map((project, index) => (
          <Box key={index}>
            <Image src={project.image} alt={project.name} />
            <Text size="lg" weight={700} mt={8}>
              {project.name}
            </Text>
            <Text size="sm" color="dimmed">
              {project.description}
            </Text>
            <Anchor href={project.url} target="_blank" rel="noopener noreferrer">
              Visit Project
            </Anchor>
          </Box>
        ))}
      </Group>
    </Container>
  );
}