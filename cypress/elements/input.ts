import { InputNames, InputTypes, TypeOptions } from "../support/types/types";
import { UiElement } from "./uiElement";

export class InputField extends UiElement {
  constructor() {
    super();
  }

  getByPlaceholder(placeholder: string) {
    return cy.get(`input[placeholder="${placeholder}"]`);
  }

  getByType(type: InputTypes) {
    return cy.get(`input[type="${type}"]`);
  }

  getByName(name: InputNames) {
    return cy.get(`input[name="${name}"]`);
  }

  fill(
    element: Cypress.Chainable<JQuery<HTMLElement>>,
    value: string,
    options?: TypeOptions
  ) {
    return element.should("be.visible").and("be.empty").type(value, options);
  }

  clear(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    return element.should("be.visible").clear();
  }

  hasValue(element: Cypress.Chainable<JQuery<HTMLElement>>, value: string) {
    return element.should("have.value", value);
  }
}
