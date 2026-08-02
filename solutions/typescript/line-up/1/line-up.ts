export function format(name: string, number: number): string {
  if (number > 999) {
    throw new Error("Number must be lower than 999.");
  }
  const ordinalNumber = getOrdinalNumeral(number);
  return `${name}, you are the ${ordinalNumber} customer we serve today. Thank you!`;
}

function getOrdinalNumeral(number: number): string {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${number}th`;
  }

  const suffixes = [, "st", "nd", "rd"];
  const suffix = suffixes[lastDigit] || "th";

  return `${number}${suffix}`;
}
