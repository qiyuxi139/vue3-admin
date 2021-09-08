describe("商品库测试", () => {
  before(() => {
    cy.login("admin", "123");
  });
  it("ite", () => {
    cy.visit("/item/itemLibrary");
    cy.get(".el-input__inner").type("随便什么");
    cy.contains("搜索").click();
    cy.wait(1000);
    cy.contains("重置").click();
  });
});
