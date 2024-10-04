export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Visit a page of the site (without '/').
       * @param url - url of the page
       * @example
       * cy.goTo("/")
       */
      goTo(url: string): Chainable<any>;
    }
  }
}

Cypress.Commands.add("goTo", (url: string) => {
  cy.visit(`${Cypress.env("url")}${url}`);
});
