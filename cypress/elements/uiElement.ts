import { ClickOptions } from "../support/types/types";

export class UiElement {
  getById(id: string) {
    return cy.get(`#${id}`);
  }

  getByText(text: string) {
    return cy.contains(text);
  }

  getByTestId(testId: string) {
    return cy.get(`[data-testid="${testId}"]`);
  }

  click(
    element: Cypress.Chainable<JQuery<HTMLElement>>,
    options?: ClickOptions
  ) {
    return element.should("be.visible").click(options);
  }

  isVisible(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    return element.should("be.visible");
  }

  hasText(element: Cypress.Chainable<JQuery<HTMLElement>>, text: string) {
    return element.should("have.text", text);
  }
}
