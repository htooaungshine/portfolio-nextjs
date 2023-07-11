import {
  IconBrandAdobe,
  IconBrandFigma,
  IconBrandGit,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandThreejs,
  IconCloud,
  IconDatabase,
} from "@tabler/icons-react";
import SkillCard, { SkillCardProps } from "../../components/SkillCard";
import { Container, Group } from "@mantine/core";
import SectionTitle from "../../components/SectionTitle";

const skills: SkillCardProps[] = [
  {
    icon: <IconBrandNodejs size={64} />,
    name: "Node JS",
    rating: 90,
  },
  {
    icon: <IconBrandReact size={64} />,
    name: "React JS",
    rating: 90,
  },
  {
    icon: <IconBrandThreejs size={64} />,
    name: "React Three Fiber",
    rating: 90,
  },
  {
    icon: <IconBrandGit size={64} />,
    name: "Version Control",
    rating: 90,
  },
  {
    icon: <IconBrandFigma size={64} />,
    name: "UI / UX",
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
    rating: 70,
  },
  {
    icon: <IconBrandAdobe size={64} />,
    name: "Photoshop",
    rating: 50,
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
