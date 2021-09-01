describe("Login test", () => {
  it('ite',() => {
    cy.visit('/login');
    cy.get(".loginForm > div:nth-of-type(1) .inputItem input").type("admin");
    
    cy.get(".loginBtn").click();
    cy.get('.is-error').should("contain", "密码不能为空");

    cy.get(".loginForm > div:nth-of-type(2) .inputItem input").type("123");

    cy.intercept("/api/user/login", {
      code: 200,
      message: "success",
      result: true
    });
    cy.get('.loginBtn').click();
   })
});
