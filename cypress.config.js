const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 800000,
    specPattern: 'cypress/integration/examples/*.js'
  },
});
