import { Button } from "./button";
import { Heading } from "./heading";
import { UiElement } from "./uiElement";

export class Modal extends UiElement {
  readonly heading: Heading;
  readonly button: Button;

  constructor() {
    super();
    this.heading = new Heading();
    this.button = new Button();
  }

  getModal() {
    return cy.get("[role='dialog']");
  }

  getModalHeading(text: string) {
    return this.heading.getHeading("h2").contains(text);
  }

  getButton(name: string) {
    return this.button.getByType("button", name);
  }
}
