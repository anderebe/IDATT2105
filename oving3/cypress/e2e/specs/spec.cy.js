describe("Feedback Form", () => {
  beforeEach(() => {
    cy.intercept("POST", "/submit-feedback", { success: false }); // Mock the server response
    cy.visit("http://localhost:8080/feedback"); // Replace 'http://localhost:8080/feedback' with the actual URL of your application
  });

  it("should disable submit button when form is invalid", () => {
    // Fill in the form with invalid data
    cy.get("#forename").type("John");
    cy.get("#surname").type("Doe");
    cy.get("#mail").type("invalidemail");
    cy.get("#comment").type("Short comment");

    // Assert that the submit button is disabled
    cy.get(".submit").should("not.be.visible");
  });

  it("should show correct response from server on successful submission", () => {
    // Fill in the form with valid data
    cy.get("#forename").type("John");
    cy.get("#surname").type("Doe");
    cy.get("#mail").type("john.doe@example.com");
    cy.get("#comment").type("This is a valid comment");

    // Submit the form
    cy.get(".submit").click();

    // Assert that the success message is displayed
    cy.contains("Success!").should("be.visible");
  });
});
