import { BasePage } from "../BasePage";
import { TextBox } from "../../elements/textBox";

export class AccountDisabledPage extends BasePage {
  readonly textBox: TextBox;

  constructor() {
    super();
    this.textBox = new TextBox();
  }

  message() {
    return this.textBox.getByClass("nw-step-description");
  }

  contactSupportButton() {
    return this.button.getByType("button", "Contact support");
  }

  backButton() {
    return this.button.getByType("button", "Back to sign-in");
  }
}
