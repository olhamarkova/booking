import { Modal } from "../elements/modal";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly modal: Modal;

  constructor() {
    super();
    this.modal = new Modal();
  }
}
