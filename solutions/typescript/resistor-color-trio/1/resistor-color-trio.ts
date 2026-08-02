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

type ColorName = keyof typeof colors;

export function decodedResistorValue(colorCodes: string[]): string {
  if (colorCodes.length < 3) {
    throw new Error("Resistor value requires at least 3 color bands");
  }

  const bands = colorCodes.slice(0, 3).map((color) => {
    const normalized = color.toLowerCase();
    if (!(normalized in colors)) {
      throw new Error(`Invalid color code: ${color}`);
    }
    return colors[normalized as ColorName];
  });

  const baseValue = bands[0] * 10 + bands[1];
  const totalOhms = baseValue * Math.pow(10, bands[2]);

  return formatOhms(totalOhms);
}


function formatOhms(ohms: number): string {
  if (ohms >= 1000000000) {
    return `${ohms / 1000000000} gigaohms`;
  }
  if (ohms >= 1000000) {
    return `${ohms / 1000000} megaohms`;
  }
  if (ohms >= 1000) {
    return `${ohms / 1000} kiloohms`;
  }

  return `${ohms} ohms`;
}
