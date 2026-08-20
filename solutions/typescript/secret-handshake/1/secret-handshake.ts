const ACTIONS = [
  "wink",
  "double blink",
  "close your eyes",
  "jump",
];

export function commands(number: number) {
  if (number < 0 || number > 31) {
    throw new Error("Invalid number");
  }
  const result: string[] = [];

  for (let index = 0; index < ACTIONS.length; index++) {
    const bitMask = 1 << index;
    if ((number & bitMask) !== 0) {
      result.push(ACTIONS[index]);
    }
  }

  const REVERSE_BIT = 1 << 4;
  if ((number & REVERSE_BIT) !== 0) {
    result.reverse();
  }

  return result;
}
