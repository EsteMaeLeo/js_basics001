function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

describe("Test Client", () => {
  test("add 20 and 30", () => {
    expect(add(20, 30)).toBe(50);
  });

  test("subtraction 10 and 5", () => {
    expect(subtraction(10, 5)).toBe(5);
  });

  test("add 10 and 10 not be 10", () => {
    expect(add(10, 10)).not.toBe(10);
  });

  test("subtraction 10 and 5 not be 10", () => {
    expect(subtraction(10, 5)).not.toBe(2);
  });
});
