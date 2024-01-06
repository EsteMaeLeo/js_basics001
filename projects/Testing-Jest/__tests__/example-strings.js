const pass = "123@456";

describe("validate the string is not empty and has 7 characters", () => {
  test("string has 7 characters", () => {
    expect(pass).toHaveLength(7);
  });

  test("String not empty", () => {
    expect(pass).not.toHaveLength(0);
  });
});
