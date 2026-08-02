const DNA_TO_RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
} as const;

type DnaNucleotide = keyof typeof DNA_TO_RNA;

export function toRna(dna: string): string {
  if (/[^GCTA]/i.test(dna)) {
    throw new Error("Invalid input DNA.");
  }

  return dna
    .toUpperCase()
    .replace(/./g, (char) => DNA_TO_RNA[char as DnaNucleotide]);
}
