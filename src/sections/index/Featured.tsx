import { Container, Divider, Group, Text } from "@mantine/core";
import DataCard from "../../components/Card";
import SectionTitle from "../../components/SectionTitle";
import { useMediaQuery } from "@mantine/hooks";

export default function Featured() {
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <Container my={32}>
      <SectionTitle title="my featured works" />
      <Group grow={!isMobile} position="center" my={16}>
        <DataCard
          src="/assets/img/works/kti.png"
          alt="Card Image"
          title="Kratom Thai Industry"
          href="https://htooaungshine.netlify.app/"
          summary="A micro-site with landing page for Kratom Company."
        />
      </Group>
    </Container>
  );
}
