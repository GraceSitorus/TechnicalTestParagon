const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    baseUrl: 'https://recruitment-staging-queenbee.paradev.io/',
    excludeSpecPattern: ['*.spec.cy.js'],
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      

    },
  },
});
