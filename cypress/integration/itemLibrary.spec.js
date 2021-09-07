describe("商品库测试", () => {
  before(() => {
    cy.login();
  });
  it("ite", () => {
    cy.visit("/item/itemLibrary");
  });
});
