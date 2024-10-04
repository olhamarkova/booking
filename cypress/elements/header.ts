import { UiElement } from "./uiElement";
import { Button } from "./button";

export class Header extends UiElement {
  readonly button: Button;

  constructor() {
    super();
    this.button = new Button();
  }

  header() {
    return cy.get("header[class=' Header_root']");
  }

  registerButton() {
    return this.button.getByTestId("header-sign-up-button");
  }

  getProfile() {
    return this.button.getByTestId("header-profile");
  }
}
