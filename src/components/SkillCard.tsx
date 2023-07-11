import { Box, Group, Progress, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export type SkillCardProps = {
  icon: JSX.Element;
  name: string;
  rating: number;
};

export default function SkillCard({ icon, name, rating }: SkillCardProps) {
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <Box>
      <Group>
        <Text>{icon}</Text>
        <Box>
          <Text>{name}</Text>
          <Progress
            //  w={isMobile ? 256 : 128}
            w={192}
            value={rating}
          />
        </Box>
      </Group>
    </Box>
  );
}
