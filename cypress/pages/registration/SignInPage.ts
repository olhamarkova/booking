import { BasePage } from "../BasePage";
import { InputField } from "../../elements/input";
import { TextBox } from "../../elements/textBox";

export class SignInPage extends BasePage {
  readonly input: InputField;
  readonly textBox: TextBox;

  constructor() {
    super();
    this.input = new InputField();
    this.textBox = new TextBox();
  }

  emailInput() {
    return this.input.getByName("username");
  }

  errorMessage() {
    return this.textBox.getById("username-note");
  }

  submitButton() {
    return this.button.getByType("submit", "Continue with email");
  }
}
