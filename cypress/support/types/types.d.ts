export type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type InputNames = "confirmed_password" | "new_password" | "username";

export type InputTypes = "email" | "password" | "username";

export type ButtonTypes = "submit" | "button";

export type ClickOptions = {
  force?: boolean;
  multiple?: boolean;
  timeout?: number;
  ctrlKey?: boolean;
  altKey?: boolean;
};

export type TypeOptions = {
  force?: boolean;
  delay?: number;
  timeout?: number;
};
