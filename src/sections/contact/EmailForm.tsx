import SectionTitle from "@/components/SectionTitle";
import {
  Box,
  Button,
  Container,
  Group,
  LoadingOverlay,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import { IconAt, IconMessage, IconSend, IconUser } from "@tabler/icons-react";
import { useState } from "react";

type FormPost = { name?: string; email?: string; message?: string };

export default function EmailForm() {
  const [state, setState] = useState<FormPost>();
  const [submitted, setSubmitted] = useState(false);
  const theme = useMantineTheme();

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => setSubmitted(false))
      .catch((error) => {
        setSubmitted(false);
        console.log(error);
      });
    event.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({ ...state, [e.currentTarget.id]: e.currentTarget.value });
  };

  return (
    <Container my={32}>
      <SectionTitle title="send me a message" />
      <Box p={64} bg={theme.colorScheme === "dark" ? "dark" : "gray.0"}>
        <form name="contact" onSubmit={onSubmit}>
          <TextInput
            icon={<IconUser size="0.8rem" />}
            mb={16}
            id="name"
            label="Name"
            required
            onChange={handleChange}
          />
          <TextInput
            icon={<IconAt size="0.8rem" />}
            mb={16}
            id="email"
            label="Email"
            required
            onChange={handleChange}
          />
          <Textarea
            icon={<IconMessage size="0.8rem" />}
            rows={4}
            mb={16}
            id="message"
            label="Message"
            required
            onChange={handleChange}
          />
          <Group position="right">
            <LoadingOverlay visible={submitted} overlayBlur={2}>
              <Button rightIcon={<IconSend size={16} />} type="submit">
                Send
              </Button>
            </LoadingOverlay>
          </Group>
        </form>
      </Box>
    </Container>
  );
}
