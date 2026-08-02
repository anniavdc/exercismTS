type TargetRing = {
  radius: number;
  points: number;
};

const RINGS: TargetRing[] = [
  { radius: 1, points: 10 },
  { radius: 5, points: 5 },
  { radius: 10, points: 1 },
];

export function score(x: number, y: number): number {
  const distanceSquared = x ** 2 + y ** 2;
  const hitRing = RINGS.find((ring) => distanceSquared <= ring.radius ** 2);

  return hitRing ? hitRing.points : 0;
}


