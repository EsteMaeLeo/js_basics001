const shoppingCard = ["Product 1", "Product 2", "Product 3"];

describe("testing shoppingCard array", () => {
  test("Test Array has 3 elements", () => {
    expect(shoppingCard).toHaveLength(3);
  });

  test("Array not empty", () => {
    expect(shoppingCard).not.toHaveLength(0);
  });
});
