import SectionTitle from "@/components/SectionTitle";
import {
  Box,
  Button,
  Container,
  Group,
  LoadingOverlay,
  Modal,
  TextInput,
  Textarea,
  Notification,
  useMantineTheme,
} from "@mantine/core";
import { IconAt, IconMessage, IconSend, IconUser } from "@tabler/icons-react";
import { FormEvent, useState } from "react";

type QuoteReq = {
  name: string;
  email: string;
  message: string;
};

export default function EmailForm() {
  const theme = useMantineTheme();
  const [alertMsg, setAlertMsg] = useState<string>();
  const [submitted, setSubmitted] = useState(false);
  const [quoteReq, setQuoteReq] = useState<QuoteReq>({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...quoteReq }),
    })
      .then(() => {
        setAlertMsg("Received your message! Well get back to you soon!");
        setSubmitted(false);
      })
      .catch((error) => {
        setAlertMsg("Oops! Something went wrong...");
        setSubmitted(true);
      });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuoteReq({ ...quoteReq, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuoteReq({ ...quoteReq, [e.target.name]: e.target.value });
  };

  return (
    <Container my={32}>
      <SectionTitle title="send me a message" />
      <Box p={64} bg={theme.colorScheme === "dark" ? "dark" : "gray.0"}>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <TextInput
            icon={<IconUser size="0.8rem" />}
            mb={16}
            name="name"
            label="Name"
            required
            onChange={handleTextChange}
          />
          <TextInput
            icon={<IconAt size="0.8rem" />}
            mb={16}
            name="email"
            label="Email"
            required
            onChange={handleTextChange}
          />
          <Textarea
            icon={<IconMessage size="0.8rem" />}
            rows={4}
            mb={16}
            name="message"
            label="Message"
            required
            onChange={handleTextAreaChange}
          />
          <Group position="right">
            <Box>
              <LoadingOverlay visible={submitted} overlayBlur={2} />
              <Button rightIcon={<IconSend size={16} />} type="submit">
                Send
              </Button>
            </Box>
          </Group>
        </form>
      </Box>
      <Modal
        opened={!!alertMsg}
        onClose={() => setAlertMsg(undefined)}
        withCloseButton={false}
      >
        <Notification title="Done!">{alertMsg}</Notification>
      </Modal>
    </Container>
  );
}
