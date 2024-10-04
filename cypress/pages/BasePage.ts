import { Header } from "../elements/header";
import { Button } from "../elements/button";
import { Heading } from "../elements/heading";

export class BasePage {
  readonly button: Button;
  readonly header: Header;
  readonly heading: Heading;

  constructor() {
    this.button = new Button();
    this.header = new Header();
    this.heading = new Heading();
  }

  title() {
    return this.heading.getHeading("h1");
  }
}
