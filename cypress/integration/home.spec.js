describe("首页特使", () => {
  before(() => {
    cy.login("admin", "123");
  });

  it("ite", () => {
    cy.visit("/");
  });
});
