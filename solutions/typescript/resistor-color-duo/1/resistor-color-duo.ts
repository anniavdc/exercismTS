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
};

type ColorName = keyof typeof colors;

export function decodedValue(colorCodes: string[]) {
  const colorCodesToKeep = colorCodes.slice(0, 2)
  let acc: number = 0;

  for (const color of colorCodesToKeep) {
    const colorCodeNormalized = color.toLowerCase();
    if (!(colorCodeNormalized in colors)) {
      throw new Error("Invalid color code");
    }
    const value = colors[colorCodeNormalized as ColorName];
    acc = acc * 10 + value;
  }

  return acc;
}