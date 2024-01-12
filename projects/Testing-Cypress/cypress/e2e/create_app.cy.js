describe("validate form", () => {
  it("Main load page", () => {
    //using baseUrl
    cy.visit("/index.html");

    cy.get('[data-cy="input-pet"]').type("Dogger");
    cy.get('[data-cy="input-owner"]').type("Joan Fez");
  });
});
