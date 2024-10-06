import {
  IconBrandAws,
  IconLambda,
  IconBrandGit,
  IconTransform,
  IconTerminal2,
  IconBrandDocker,
  IconCloud,
  IconDatabase,
} from "@tabler/icons-react";
import SkillCard, { SkillCardProps } from "../../components/SkillCard";
import { Container, Group } from "@mantine/core";
import SectionTitle from "../../components/SectionTitle";

const skills: SkillCardProps[] = [
  {
    icon: <IconTransform size={64} />,
    name: "CI/CD",
    rating: 90,
  },
  {
    icon: <IconTerminal2 size={64} />,
    name: "Linux",
    rating: 90,
  },
  {
    icon: <IconBrandDocker size={64} />,
    name: "Docker and Kubernetes",
    rating: 90,
  },
  {
    icon: <IconBrandGit size={64} />,
    name: "Version Control",
    rating: 90,
  },
  {
    icon: <IconLambda size={64} />,
    name: "Lambda",
    rating: 60,
  },
  {
    icon: <IconDatabase size={64} />,
    name: "Database",
    rating: 70,
  },
  {
    icon: <IconCloud size={64} />,
    name: "DevOps",
    rating: 90,
  },
  {
    icon: <IconBrandAws size={64} />,
    name: "AWS",
    rating: 90,
  },
];

export default function Skills() {
  return (
    <Container my={32}>
      <SectionTitle title="my skills" />
      <Group position="center" my={16}>
        {skills.map((skill, i) => (
          <SkillCard {...skill} key={`skill-${i}`} />
        ))}
      </Group>
    </Container>
  );
}
