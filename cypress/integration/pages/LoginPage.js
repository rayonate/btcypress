/// <reference types="cypress" />

class LoginPage
{
    fillUsername(value)
    {
        const field = cy.get(':nth-child(1) > #username')
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field = cy.get('#password')
        field.type(value)
        return this
    }

    login()
    {
        const button = cy.get('#signIn')
        button.click()
    }

    loginInvalid(value)
    {
        cy.get('.alert').should('contain',value)
    }

    loginValid(value)
    {
        cy.get('.content > :nth-child(2)').should('contain',value)
    }

}
export default LoginPage