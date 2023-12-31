import { Box, Group, Stack } from "@mantine/core";
import { useEffect, useState } from "react";

type pallet = string[];

const colorPallet: pallet = [
  "#ffffff",
  "#FFB0E7",
  "#FF7625",
  "#FFD600",
  "#009946",
  "#534BFF",
  "#000000",
  "#ffffff",
];

const PIXEL_SIZE = 30;
const ROWS = 25;
const TOTAL_PIXELS = (1920 / PIXEL_SIZE) * ROWS;
const CHANGE_TIME = 1500;
const PIXEL_TRANSITION = "400ms";

const createRandNumber = (range: number) => Math.floor(Math.random() * range);

interface PixelProps {
  color: string;
}

const Pixel = ({ color }: PixelProps) => {
  return (
    <Box
      h={PIXEL_SIZE}
      w={PIXEL_SIZE}
      sx={{
        backgroundColor: color,
        transitionDuration: PIXEL_TRANSITION,
      }}
    />
  );
};

const ColourGrid = () => {
  const [colors, setColors] = useState<string[]>(
    Array.from(
      { length: TOTAL_PIXELS },
      () => colorPallet[createRandNumber(colorPallet.length)]
    )
  );

  const changeColors = () => {
    const randomColors = colors.map((x, index) =>
      createRandNumber(colors.length) > index &&
      createRandNumber(colors.length) < index &&
      createRandNumber(colors.length) > index
        ? colorPallet[createRandNumber(colorPallet.length)]
        : x
    );
    setColors(randomColors);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeColors();
    }, CHANGE_TIME);

    return () => clearInterval(interval);
  }, []);
  return (
    <Stack>
      <Group spacing={0}>
        {colors.map((color, index) => (
          <Pixel color={color} key={index} />
        ))}
      </Group>
    </Stack>
  );
};

export default ColourGrid;
