import { Box, Group, Progress, Text } from "@mantine/core";

export type SkillCardProps = {
  icon: JSX.Element;
  name: string;
  rating: number;
};

export default function SkillCard({ icon, name, rating }: SkillCardProps) {
  return (
    <Box>
      <Group>
        <Text>{icon}</Text>
        <Box>
          <Text>{name}</Text>
          <Progress w={128} value={rating} />
        </Box>
      </Group>
    </Box>
  );
}
