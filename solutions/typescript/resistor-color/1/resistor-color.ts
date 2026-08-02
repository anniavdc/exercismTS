const colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const;

type colorName = keyof typeof colors

export const colorCode = (color: string): number => {
  const normalizedColor = color.toLowerCase()
  if (!(normalizedColor in colors)) {
    throw new Error("Color not recognized");
  }
  return colors[normalizedColor as colorName];
};

export const COLORS = Object.keys(colors);
