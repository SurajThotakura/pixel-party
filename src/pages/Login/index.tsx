import {
  Box,
  Button,
  Center,
  PasswordInput,
  Space,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import { Provider, atom, useAtom } from "jotai";
import { useState } from "react";

interface LoginProps {
  setAuthOkay: React.Dispatch<React.SetStateAction<Boolean>>;
}

interface ButtonWarpperProps {
  validate: (uName: string, password: string) => void;
}
interface validatePropType {
  validate: (uName: string, password: string) => void;
}

const uNameAtom = atom("");
const passwordAtom = atom("");

const UserNameWrapper = () => {
  const [uName, setUName] = useAtom(uNameAtom);
  return (
    <TextInput
      label="Username"
      placeholder="Enter your username"
      value={uName}
      onChange={(e) => setUName(e.currentTarget.value)}
      w={400}
    />
  );
};

const PasswordWrapper = ({ validate }: validatePropType) => {
  const [uName] = useAtom(uNameAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  return (
    <PasswordInput
      placeholder="Password"
      label="Password"
      value={password}
      onChange={(e) => setPassword(e.currentTarget.value)}
      onKeyDown={getHotkeyHandler([["Enter", () => validate(uName, password)]])}
    />
  );
};

const ButtonWrapper = ({ validate }: ButtonWarpperProps) => {
  const [uName] = useAtom(uNameAtom);
  const [password] = useAtom(passwordAtom);
  return (
    <Button color="green" onClick={() => validate(uName, password)}>
      Login
    </Button>
  );
};

const LoginPage = ({ setAuthOkay }: LoginProps) => {
  const [error, setError] = useState<Boolean>(false);

  const validate = (uName: string, password: string) => {
    if (
      uName === import.meta.env.VITE_USER_NAME &&
      password === import.meta.env.VITE_PASSWORD
    ) {
      setAuthOkay(true);
      setError(false);
    } else setError(true);
  };
  return (
    <Provider>
      <Center
        h="100vh"
        w="100vw"
        sx={{
          background:
            "linear-gradient(to top, rgba(8, 9, 11,1), rgba(16, 17, 19,.75)), url(public/assets/pixelBG.jpg)",
        }}
      >
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.dark[8],
            padding: "32px 40px",
            borderRadius: theme.radius.md,
          })}
        >
          <Text fz={32} fw={500}>
            Hey. Hello. Hi. 👋
          </Text>
          <Text fz={14} fw={300}>
            Please enter your details
          </Text>
          <Space h={24} />
          <Stack justify="space-between" h={256}>
            <Stack>
              <UserNameWrapper />
              <PasswordWrapper validate={validate} />
              {error && (
                <Text color="red.5">Incorrect details, please try again</Text>
              )}
            </Stack>
            <ButtonWrapper validate={validate} />
          </Stack>
        </Box>
      </Center>
    </Provider>
  );
};

export default LoginPage;
