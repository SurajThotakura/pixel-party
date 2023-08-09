import { Space, Stack, Tabs, Text } from "@mantine/core";
import ColourGrid from "../../components/ColourGrid";
import ProgressiveGrid from "../../components/ProgressiveGrid";

const Home = () => {
  return (
      <Stack spacing={0} align="center">
        <Space h={32}/>
        <Text fz={32}>Pixel Party 🥳</Text>
        <Space h={32} />
        <Tabs color="violet" radius="xl" variant="pills" defaultValue="twinkle" styles={{tab:{fontSize:20}}} >
          <Tabs.List position="center">
            <Tabs.Tab value="twinkle">Twinkle</Tabs.Tab>
            <Tabs.Tab value="tetris">Tetris</Tabs.Tab>
          </Tabs.List>
          <Space h={32}/>
          <Tabs.Panel value="twinkle">
            <ColourGrid/>
          </Tabs.Panel>
          <Tabs.Panel value="tetris">
            <ProgressiveGrid/>
          </Tabs.Panel>
        </Tabs>
      </Stack>
  );
};

export default Home;
