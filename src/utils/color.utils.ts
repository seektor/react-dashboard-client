export const COLOR_PALETTE = [
  "#003f5c",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#d45087",
  "#f95d6a",
  "#ff7c43",
  "#ffa600]",
];

export const generateColor = (index: number): string =>
  COLOR_PALETTE[index % COLOR_PALETTE.length];
