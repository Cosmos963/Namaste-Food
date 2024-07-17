import { sum } from "../sum";

test("Sum function should caclculate the sum of two numbers", () => {
  const result = sum(3, 7);

  // Assertion
  expect(result).toBe(10);
});
