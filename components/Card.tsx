import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  AspectRatio,
  Anchor,
  Box,
} from "@mantine/core";

type DataCardProps = {
  src: string;
  alt: string;
  title: string;
  href: string;
  summary: string;
};

export default function DataCard({
  src,
  alt,
  title,
  href,
  summary,
}: DataCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Anchor href={href} target="_blank">
          <AspectRatio ratio={16 / 9}>
            <Image src={src} alt={alt} />
          </AspectRatio>
        </Anchor>
      </Card.Section>

      <Box my={16}>
        <Anchor size="lg" href={href} weight={700} target="_blank">
          {title}
        </Anchor>
      </Box>

      <Text size="sm" color="dimmed">
        {summary}
      </Text>
    </Card>
  );
}
