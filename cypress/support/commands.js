// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (username, password) => {
  if (cy.getCookie("TOKEN_KEY")) {
    return;
  }
  cy.visit("/login");
  cy.get(".loginForm > div:nth-of-type(1) .inputItem input").type(username);
  cy.get(".loginBtn").click();
  cy.get(".is-error").should("contain", "密码不能为空");
  cy.get(".loginForm > div:nth-of-type(2) .inputItem input").type(password);
  cy.intercept("/api/user/login", {
    code: 200,
    message: "success",
    result: true
  });
  cy.get(".loginBtn").click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
