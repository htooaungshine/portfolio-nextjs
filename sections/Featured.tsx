import { Container, Divider, Group, Text } from "@mantine/core";
import DataCard from "../components/Card";

export default function Featured() {
  return (
    <Container my={32}>
      <Divider
        label={
          <Text ff="Montserrat Alternates" fs="bold" size={32} weight={700}>
            My Featured Works
          </Text>
        }
        labelPosition="center"
      />
      <Group grow my={16}>
        <DataCard
          src="/assets/img/hero.png"
          alt="Card Image"
          title="Degitic House"
          href="https://degitichouse.com"
          summary="A start-up software house with my colleagues."
        />
        <DataCard
          src="/assets/img/hero.png"
          alt="Card Image"
          title="Kratom Thai Industry"
          href="https://kratom-thai-industry.com"
          summary="A micro-site with landing page for Kratom Company."
        />
        <div />
      </Group>
    </Container>
  );
}
