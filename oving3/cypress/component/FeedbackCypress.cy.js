import { mount } from '@cypress/vue'
import FeedbackForm from '../../src/components/FeedbackContent.vue'


describe('Feedback Form', () => {
    it('should disable submit button when form is invalid', () => {
        cy.intercept('POST', '/submit-feedback', { success: false }) // Mock the server response
        cy.visit('/') // Replace '/' with the actual URL of your application

        // Fill in the form with invalid data
        cy.get('#forename').type('John')
        cy.get('#surname').type('Doe')
        cy.get('#mail').type('invalidemail')
        cy.get('#comment').type('Short comment')

        // Assert that the submit button is disabled
        cy.get('.submit').should('be.disabled')
    })

    it('should show correct response from server on successful submission', () => {
        cy.intercept('POST', '/submit-feedback', { success: true }) // Mock the server response
        cy.visit('/') // Replace '/' with the actual URL of your application

        // Fill in the form with valid data
        cy.get('#forename').type('John')
        cy.get('#surname').type('Doe')
        cy.get('#mail').type('john.doe@example.com')
        cy.get('#comment').type('This is a valid comment')

        // Submit the form
        cy.get('.submit').click()

        // Assert that the success message is displayed
        cy.contains('Success! Form submitted!').should('be.visible')
    })
})
