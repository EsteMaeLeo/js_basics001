const client = {
  name: "William Walkings",
  budget: 5000,
  type: "Premium",
};

describe("Testing client", () => {
  test("Client is William", () => {
    expect(client).toMatchSnapshot();
  });
});
