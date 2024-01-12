describe("validate form", () => {
  it("Main load page", () => {
    cy.visit("http://127.0.0.1:5501/projects/Testing-Cypress/index.html");

    cy.get('[data-cy="formcy"]').submit();
  });
});
