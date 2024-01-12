describe("validate form", () => {
  it("Main load page", () => {
    //using baseUrl
    cy.visit("/index.html");

    cy.get('[data-cy="input-pet"]').type("Dogger");
    cy.get('[data-cy="input-owner"]').type("Joan Fez");
    cy.get('[data-cy="input-phone"]').type("154515099");
    cy.get('[data-cy="input-date"]').type("2024-01-22");
    cy.get('[data-cy="input-hour"]').type("12:15");
    cy.get('[data-cy="input-symptoms"]').type("Very sick and sad");
  });
});
