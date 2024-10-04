import { Headings } from "../support/types/types";
import { UiElement } from "./uiElement";

export class Heading extends UiElement {
  constructor() {
    super();
  }

  getHeading(heading: Headings) {
    return cy.get(heading);
  }
}
