describe("Login Page", () => {
  it("should login with valid username and password", () => {
    cy.visit("login.html");
    cy.get("#username").type("validUsername");
    cy.get("#password").type("validPassword");
    cy.get("#loginButton").click();
    // Add assertions to verify successful login
  });

  it("should display error message for invalid login", () => {
    cy.visit("login.html");
    cy.get("#username").type("invalidUsername");
    cy.get("#password").type("invalidPassword");
    cy.get("#loginButton").click();
    // Add assertions to verify error message
  });
});
