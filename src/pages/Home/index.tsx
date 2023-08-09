import { Center, Group, Space, Stack, Text } from "@mantine/core";
import ColourGrid from "../../components/ColourGrid";

const Home = () => {
  return (
    <Center h="100vh" w="100vw">
      <Stack align="center" spacing={0}>
        <Text fz={24}>Pixel Party 🥳</Text>
        <Space h={48} />
        <Group spacing={0}>
          <ColourGrid />
          {/* <ColourGrid /> */}
        </Group>
      </Stack>
    </Center>
  );
};

export default Home;
