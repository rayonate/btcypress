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
    checkName(){



        cy.get('#name-validation > div > .text-danger').should('have.text','can not enter numbers or special characters.')

    }
    checkUsername(){



        cy.get(':nth-child(2) > app-validation-message > div > .text-danger').should('have.text','Alpha numeric characters only and should not be entirely numeric.')

    }
    checkEmail(){

        cy.get(':nth-child(3) > app-validation-message > div > .text-danger').should('have.text','Invalid email address.')

    }
    checkPhoneNumber(){

        cy.get(':nth-child(4) > app-validation-message > div > .text-danger').should('have.text','Please enter a valid telephone number, between 7 and 15 numbers.')

    }
    checkPassword(){

        cy.get(':nth-child(5) > app-validation-message > div > .text-danger').should('have.text','Minimum length of this field is 8.')


    }
    checkRRepeatPassword(){

        cy.get(':nth-child(6) > app-validation-message > div > .text-danger').should('have.text','Minimum length of this field is 8.')

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
    termsConditions()
    {
        const button = cy.get('.custom-control-label > .text-success')
        button.click()
    }




}
export default RegisterPage
