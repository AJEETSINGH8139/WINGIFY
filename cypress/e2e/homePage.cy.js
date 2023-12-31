describe("Home Page", () => {
  before(() => {
    cy.visit("https://ajeetsingh8139.github.io/WINGIFY/");
    cy.get("#username").type("validUsername");
    cy.get("#password").type("validPassword");
    cy.get("#log-in").click();
    cy.url().should("include", "https://ajeetsingh8139.github.io/WINGIFY/home.html");
  });

  it("should sort values when AMOUNT header is clicked", () => {
    cy.get("table#transactionTable th").contains("amount").click();
    // Add assertions to verify the sorting order
  });
});
