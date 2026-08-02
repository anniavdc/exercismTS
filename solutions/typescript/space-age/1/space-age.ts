const earthYearInSeconds = 31_557_600;

const orbitalPlanetTime = {
  MERCURY: 0.2408467,
  VENUS: 0.61519726,
  EARTH: 1.0,
  MARS: 1.8808158,
  JUPITER: 11.862615,
  SATURN: 29.447498,
  URANUS: 84.016846,
  NEPTUNE: 164.79132,
} as const;

type Planet = keyof typeof orbitalPlanetTime;

export function age(planet: Planet | string, seconds: number): number {
  const planetNameNormalized = planet.toUpperCase() as Planet;

  const orbitalPeriod = orbitalPlanetTime[planetNameNormalized];
  if (!orbitalPeriod) {
    throw new Error("Invalid planet name");
  }
  
  const earthAge = seconds / earthYearInSeconds / orbitalPeriod;
  return Number(earthAge.toFixed(2));
}
