describe("validate form", () => {
  it("Main load page", () => {
    cy.visit("http://127.0.0.1:5501/projects/Testing-Cypress/index.html");

    cy.get('[data-cy="formcy"]').submit();

    //select alert
    cy.get('[data-cy="alert-cy"]')
      .invoke("text")
      .should("equal", "Todos los campos son Obligatorios");

      cy.get('[data-cy="alert-cy"]')
      .should("have.class", "alert-danger");
 
       //verify text of citas data-cy="citas-heading"
       cy.get('[data-cy="citas-heading"]')
       .invoke("text")
       .should("equal", "No hay Citas, comienza creando una");
    });
});
