//test('Description that you need to display', () => {})

import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(4, 4);

  //Assertion (always need)
  expect(result).toBe(8);
});
