export function isPangram(sentence: string) {
  const letters = sentence.toLowerCase().match(/[a-z]/g);
  return letters ? new Set(letters).size === 26 : false;
}