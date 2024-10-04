import { HomePage } from "../../pages/HomePage";
import { SignInPage } from "../../pages/registration/SignInPage";
import { CreatePasswordPage } from "../../pages/registration/CreatePasswordPage";
import { headings } from "../../data/headings";
import {
  generateRandomEmail,
  generateRandomPassword,
} from "../../support/utils/generateCredentials";
import { AccountDisabledPage } from "../../pages/registration/AccounDisabledPage";
import { registrationErrors } from "../../data/errorMessages";
import { invalidEmails } from "../../data/invalidEmails";

const homePage = new HomePage();
const signIn = new SignInPage();
const createPassword = new CreatePasswordPage();
const disabledAccount = new AccountDisabledPage();

const email = generateRandomEmail();
const password = generateRandomPassword();

describe("Registration with email", function () {
  beforeEach(function () {
    cy.goTo("");
    cy.setEngLanguage();
  });

  it.skip("A user shall be able to register with valid email and password", function () {
    //Click on the 'Register' button
    homePage.header.click(homePage.header.registerButton());
    signIn.heading.hasText(signIn.title(), headings.signIn);

    //Enter an email
    signIn.input.fill(signIn.emailInput(), email);
    signIn.input.hasValue(signIn.emailInput(), email);

    //Click the 'Continue with email' button
    signIn.button.click(signIn.submitButton());
    createPassword.heading.hasText(
      createPassword.title(),
      headings.createPassword
    );

    //Enter the password in the 'Password' input field
    createPassword.input.fill(createPassword.passwordInput(), password);

    //Enter the same password in the 'Confirm password' input field
    createPassword.input.fill(createPassword.confirmPasswordInput(), password);

    //Click 'Create account' button
    createPassword.button.click(createPassword.submitButton());
    if (!createPassword.heading.isVisible(createPassword.captchaMessage())) {
      homePage.modal.isVisible(
        homePage.modal.getModalHeading(headings.registrationSuccessModal)
      );

      //Click 'Got it!' button
      homePage.modal.button.click(homePage.modal.getButton("Got it!"));
      homePage.header.isVisible(homePage.header.getProfile());
    } else return;
  });

  it("A user shall NOT be able to register with a compromised email", function () {
    //Click on the 'Register' button
    homePage.header.click(homePage.header.registerButton());
    signIn.heading.hasText(signIn.title(), headings.signIn);

    //Enter an email
    signIn.input.fill(signIn.emailInput(), "test@gmail.com");
    signIn.input.hasValue(signIn.emailInput(), "test@gmail.com");

    //Click the 'Continue with email' button
    signIn.button.click(signIn.submitButton());
    disabledAccount.heading.hasText(
      disabledAccount.title(),
      headings.accountDisabled
    );
    disabledAccount.textBox.hasText(
      disabledAccount.message(),
      registrationErrors.forbiddenEmail
    );
    disabledAccount.button.isVisible(disabledAccount.backButton());
    disabledAccount.button.isVisible(disabledAccount.contactSupportButton());
  });

  it(`A user shall see the error if uses invalid email for registration`, function () {
    //Click on the 'Register' button
    homePage.header.click(homePage.header.registerButton());
    signIn.heading.hasText(signIn.title(), headings.signIn);

    invalidEmails.forEach((invalidEmail) => {
      //Enter an email
      signIn.input.fill(signIn.emailInput(), invalidEmail);
      signIn.input.hasValue(signIn.emailInput(), invalidEmail);

      //Click the 'Continue with email' button
      signIn.button.click(signIn.submitButton());
      signIn.textBox.hasText(
        signIn.errorMessage(),
        registrationErrors.invalidEmail
      );
      signIn.input.clear(signIn.emailInput());
    });
  });
});
