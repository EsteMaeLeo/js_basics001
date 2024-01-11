//<reference types="cypress"/>

describe("template spec", () => {
  it("Main load page", () => {
    cy.visit("http://127.0.0.1:5501/projects/Testing-Cypress/index.html");

    //veryfy element and text
    cy.contains(
      '[data-cy="title-project"]',
      "Administrador de Pacientes de Veterinaria"
    );

    //cy.get("h1").should("exist");
    //verfy exist
    cy.get('[data-cy="title-project"]').should("exist");

    //check if the element exist and contain text
    cy.get('[data-cy="title-project"]')
      .invoke("text")
      .should("equal", "Administrador de Pacientes de Veterinaria");

      //verify text of citas data-cy="citas-heading"
      cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("equal", "No hay Citas, comienza creando una");
  });
});
