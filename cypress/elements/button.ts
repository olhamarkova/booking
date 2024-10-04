import { ButtonTypes } from "../support/types/types";
import { UiElement } from "./uiElement";

export class Button extends UiElement {
  constructor() {
    super();
  }

  getByType(type: ButtonTypes, name: string) {
    return cy.get(`button[type="${type}"]`).contains(name);
  }
}
