import { UiElement } from "./uiElement";

export class TextBox extends UiElement {
  constructor() {
    super();
  }

  getByClass(className: string) {
    return cy.get(`p.${className}`);
  }
}
