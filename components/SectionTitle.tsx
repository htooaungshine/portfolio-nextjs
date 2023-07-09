import { Divider, Text } from "@mantine/core";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Divider
      label={
        <Text ff="Montserrat Alternates" fs="bold" size={32} weight={700}>
          {title}
        </Text>
      }
      labelPosition="center"
      mb={32}
    />
  );
}
