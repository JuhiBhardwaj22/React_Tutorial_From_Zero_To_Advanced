import sum from "../testEXampleFile/sum";

test("check sum of 2 number", () => {
  expect(sum(2, 3)).toBe(5);
});
