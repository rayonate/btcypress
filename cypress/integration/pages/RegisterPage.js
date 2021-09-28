/// <reference types="cypress" />

class RegisterPage
{
    fillName(value)
    {
        const field = cy.get('#name')
        field.type(value)
        return this
    }

    fillUsername(value)
    {
        const field = cy.get(':nth-child(2) > #username')
        field.type(value)
        return this
    }

    fillEmail(value)
    {
        const field = cy.get('#email')
        field.type(value)
        return this
    }

    fillTelephone(value)
    {
        const field = cy.get('#telephone')
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field = cy.get('#singup-password')
        field.type(value)
        return this
    }

    fillRepeatPassword(value)
    {
        const field = cy.get('#password2')
        field.type(value)
        return this
    }

    agreeCheckbox()
    {
        const button = cy.get('.custom-control-label')
        button.click()
    }

    signup()
    {
        const button = cy.get('#signUpbtn')
        button.click()
    }

    validateNewUser(value)
    {
        cy.get('#h1').should('contain',value)
    }

    validateExistingUser(value)
    {
        cy.get(':nth-child(2) > app-validation-message > div > .text-danger').should('contain',value)
    }

}
export default RegisterPage
