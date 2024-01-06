const client = {
  name: "William",
  budget: 5000,
};

describe("Test Client", () => {
  test("Client is premium", () => {
    expect(client.budget).toBeGreaterThan(4000);
  });

  test("Name is William", () => {
    expect(client.name).toBe("William");
  });

  test("IS not another client", () => {
    expect(client.name).not.toBe("Petter");
  });

  test("Not Budget 5000", () => {
    expect(client.budget).not.toBe(4000);
  });
});
