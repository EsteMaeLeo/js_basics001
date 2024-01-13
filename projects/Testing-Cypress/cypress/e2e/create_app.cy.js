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
    cy.get('[data-cy="submit-cy"]').click();

    //verify text of citas data-cy="citas-heading"
    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("equal", "Administra tus Citas");

    //select alert
    cy.get('[data-cy="alert-cy"]')
      .invoke("text")
      .should("equal", "Se agregó correctamente");

    cy.get('[data-cy="alert-cy"]').should("have.class", "alert-success");
  });
});
