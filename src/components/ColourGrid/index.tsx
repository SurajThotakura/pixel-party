import { Box, SimpleGrid, Stack } from "@mantine/core";
import { useEffect, useState } from "react";

type pallet = [string, string, string, string, string, string, string];

const colorPallet: pallet = [
  "#ffffff",
  "#FFB0E7",
  "#FF7625",
  "#FFD600",
  "#009946",
  "#534BFF",
  "#000000",
];

const PIXEL_SIZE = 30;
const COLUMNS = 25;
const CHANGE_TIME = 3000;
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
      { length: COLUMNS * COLUMNS },
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
      <SimpleGrid
        cols={COLUMNS}
        spacing={0}
        verticalSpacing={0}
        w={PIXEL_SIZE * COLUMNS}
      >
        {colors.map((color, index) => (
          <Pixel color={color} key={index} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default ColourGrid;
