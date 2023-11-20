import { add } from "../index.js";

describe("add()", () => {
  describe("Given two numbers", () => {
    const a = 5;
    const b = 3;

    it("should return the sum", () => {
      expect(add(a, b)).toEqual(8);
    });
  });
});
