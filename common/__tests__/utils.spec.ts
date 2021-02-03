import {
  findHeaviest,
  findMaxCrewSize,
  findMaxValueIndex,
  parseValueToFloatNumber,
} from "../utils";

describe("utils", () => {
  describe("parseValueToFloatNumber", () => {
    it("should parse valid integer number in string to number", () => {
      ["1", "2", "3", "40"].forEach((val) => {
        expect(Number.isNaN(parseValueToFloatNumber(val))).toBe(false);
      });
    });

    it("should parse valid float number in string to number", () => {
      ["1.5", "2", "3", "40"].forEach((val) => {
        expect(Number.isNaN(parseValueToFloatNumber(val))).toBe(false);
      });
    });

    it("should return -1 for invalid number string", () => {
      ["undefined", "w", "unknown"].forEach((val) => {
        expect(parseValueToFloatNumber(val)).toBe(-1);
      });
    });
  });

  describe("findMaxValueIndex", () => {
    it("should find index of max value", () => {
      expect(findMaxValueIndex([1, 200, 3, 40])).toBe(1);
    });

    it("should not find index of max value of empty array", () => {
      expect(findMaxValueIndex([])).toBe(-1);
    });
  });

  describe("findHeaviest", () => {
    it("should find index of heaviest person", () => {
      const people = [{ mass: "80" }, { mass: "120" }, { mass: "50" }];
      expect(findHeaviest(people)).toBe(1);
    });

    it("should find index of heaviest person with one invalid person ", () => {
      const people = [{ mass: "unknown" }, { mass: "120" }];

      expect(findHeaviest(people)).toBe(1);
    });

    it("should  not find index of heaviest person when provided unknown data ", () => {
      const people = [{ mass: "unknown" }, { mass: "n/a" }];

      expect(findHeaviest(people)).toBe(-1);
    });
  });

  describe("findMaxCrewSize", () => {
    it("should find index of largest crew", () => {
      const starships = [{ crew: "80" }, { crew: "120" }, { crew: "50" }];
      expect(findMaxCrewSize(starships)).toBe(1);
    });

    it("should find index of heaviest person with one invalid person ", () => {
      const starships = [{ crew: "unknown" }, { crew: "120" }];

      expect(findMaxCrewSize(starships)).toBe(1);
    });

    it("should  not find index of heaviest person when provided unknown data ", () => {
      const starships = [{ crew: "unknown" }, { crew: "n/a" }];

      expect(findMaxCrewSize(starships)).toBe(-1);
    });
  });
});
