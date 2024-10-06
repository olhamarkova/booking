## Where are manual test cases?

You'll find them in the "cypress/documentation" folder.

If the content isn't displayed (GitHub sometimes has this issue) just download the PDF file.

## How is this project organized?

The e2e tests are in the "cypress/e2e" folder.

I implemented PageObject Model pattern, and you'll find PageObject Models in the "cypress/pages" folder.

In the "cypress/elements" folder there are UI elements for pages.

Custom commands are in the "cypress/support/commands" folder.

In the "cypress/videos" folder there is the video of successful test run.

## How do I run tests?

# Method 1

Make sure NodeJS is installed.

If you haven’t installed NodeJS yet, please install it from the [NodeJS site](https://nodejs.org/en).

Then:

1. Clone this repository;
2. Open the folder in your terminal and write the command:

`npm install`

3. Copy the `.env.example` file to `.env` before running the tests. You can do this manually or by running the following command:

`cp .env.example .env`

4. To run test in your terminal (headless mode):

`npm run test`

To open Cypress (UI mode):

`npm run cypress`

or

`npx cypress open`

# Method 2

Pull the docker image:

`docker pull olhamarkova/booking-cypress-tests`

Then just run this image.
