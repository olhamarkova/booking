export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Set English as a language for the site through cookies.
       */
      setEngLanguage(): Chainable<any>;
    }
  }
}

Cypress.Commands.add("setEngLanguage", () => {
  cy.setCookie("bkng_ap_lang", "en-us");
});
