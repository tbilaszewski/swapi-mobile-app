import { PeopleWithMass, StarshipsWithCrew } from "./types";

export const parseValueToFloatNumber = (value: string): number => {
  const numberValue = Number.parseFloat(value);
  return Number.isNaN(numberValue) ? -1 : numberValue;
};

export const findMaxValueIndex = (arr: number[]): number => {
  const maxValue = Math.max(...arr);
  if (maxValue < 0) {
    return -1;
  }
  return arr.findIndex((item) => item === maxValue);
};

const findMaxNaturalValue = <T extends { [key: string]: string }>(
  array: T[],
  key: keyof T
): number => {
  const masses = array.map((item) => item[key]).map(parseValueToFloatNumber);
  return findMaxValueIndex(masses);
};

export const findHeaviest = (people: PeopleWithMass[]) =>
  findMaxNaturalValue<PeopleWithMass>(people, "mass");

export const findMaxCrewSize = (starships: StarshipsWithCrew[]) =>
  findMaxNaturalValue<StarshipsWithCrew>(starships, "crew");
