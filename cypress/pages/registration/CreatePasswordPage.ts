import { BasePage } from "../BasePage";
import { InputField } from "../../elements/input";
import { TextBox } from "../../elements/textBox";

export class CreatePasswordPage extends BasePage {
  readonly input: InputField;
  readonly textBox: TextBox;

  constructor() {
    super();
    this.input = new InputField();
    this.textBox = new TextBox();
  }

  passwordInput() {
    return this.input.getByName("new_password");
  }

  confirmPasswordInput() {
    return this.input.getByName("confirmed_password");
  }

  submitButton() {
    return this.button.getByType("submit", "Create account");
  }

  passwordErrorMessage() {
    return this.textBox.getById("new_password-note");
  }

  confirmationErrorMesssage() {
    return this.textBox.getById("confirmed_password-note");
  }

  captchaMessage() {
    return this.heading.getHeading("h3").contains("Are you a robot?");
  }
}
