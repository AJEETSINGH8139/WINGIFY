describe("Home Page", () => {
  before(() => {
    cy.visit("https://sakshingp.github.io/assignment/login.html");
    cy.get("#username").type("validUsername");
    cy.get("#password").type("validPassword");
    cy.get("#loginButton").click();
    cy.url().should("include", "/home.html");
  });

  it("should sort values when AMOUNT header is clicked", () => {
    cy.get("table#transactionTable th").contains("AMOUNT").click();
    // Add assertions to verify the sorting order
  });
});
