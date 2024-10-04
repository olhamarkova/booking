import { reporters } from "mocha";

const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  env: {
    url: `${process.env.URL}`,
    password: `${process.env.PASSWORD}`,
    email: `${process.env.EMAIL}`,
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: true,
  screenshotOnRunFailure: true,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/*/*.cy.ts",
  },
});
