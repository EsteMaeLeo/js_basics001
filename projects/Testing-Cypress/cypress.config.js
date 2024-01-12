const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 1500,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://127.0.0.1:5501/projects/Testing-Cypress"
  },
});
