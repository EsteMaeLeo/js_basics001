//<reference types="cypress"/>

describe("template spec", () => {
  it("Main load page", () => {
    cy.visit("http://127.0.0.1:5501/projects/Testing-Cypress/index.html");
    cy.contains("h1", "Administrador de Pacientes de Veterinaria");
  });
});
