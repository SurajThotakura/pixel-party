import { Box, SimpleGrid } from "@mantine/core";
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
const TOTAL_PIXELS = COLUMNS * COLUMNS;
const CHANGE_TIME = 800;

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
      }}
    />
  );
};

const ProgressiveGrid = () => {
  const [colors, setColors] = useState<string[]>(
    Array.from(
      { length: TOTAL_PIXELS },
      () => colorPallet[createRandNumber(colorPallet.length)]
    )
  );

  const changeColors = () => {
    const randomColors = colors.map((_x, index, array) =>
      colors.length - COLUMNS - 1 < index
        ? colorPallet[createRandNumber(colorPallet.length)]
        : array[index + COLUMNS]
    );
    setColors(randomColors);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeColors();
    }, CHANGE_TIME);

    return () => clearInterval(interval);
  }, [colors]);
  return (
    <SimpleGrid cols={COLUMNS} verticalSpacing={0} spacing={0}>
      {colors.map((color, index) => (
        <Pixel color={color} key={index} />
      ))}
    </SimpleGrid>
  );
};

export default ProgressiveGrid;
