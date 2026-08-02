export function reverse(word: string) {
  if (typeof word !== "string") {
    throw new Error("Input has to be a string")
  }
  return word.split("").reverse().join("")
}
