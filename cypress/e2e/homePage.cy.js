describe("Home Page", () => {
  before(() => {
    cy.visit("login.html");
    cy.get("#username").type("validUsername");
    cy.get("#password").type("validPassword");
    cy.get("#log-in").click();
    cy.url().should("include", "/home.html");
  });

  it("should sort values when AMOUNT header is clicked", () => {
    cy.get("table#transactionTable th").contains("amount").click();
    // Add assertions to verify the sorting order
  });
});
