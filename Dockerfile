FROM cypress/browsers:latest

WORKDIR /tests

COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./.env.example .
COPY ./tsconfig.json .
COPY ./cypress ./cypress

RUN cp .env.example .env
RUN npm install

ENTRYPOINT [ "npm", "run", "test" ]