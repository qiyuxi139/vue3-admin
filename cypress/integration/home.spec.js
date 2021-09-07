describe("首页特使", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("TOKEN_KEY");
  });

  it("ite", () => {
    cy.visit("/");
  });
});
