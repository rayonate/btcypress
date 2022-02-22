/// <reference types="cypress" />

import HeaderPage from '../pages/HeaderPage'
import RegisterPage from '../pages/RegisterPage'

describe('Billionthing Register Test', function () {

    it('Verify if the user can not register with an invalid Email Address', function () {

        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then(registertest => {

                headerpage.visit()
                headerpage.signupHeader()
                registerpage.fillName(registertest.ValidName)
                registerpage.fillUsername(registertest.ValidUsername)
                registerpage.fillEmail(registertest.InvalidEmail)
                registerpage.fillTelephone(registertest.ValidTelephoneNo)
                registerpage.fillPassword(registertest.ValidPassword)
                registerpage.fillRepeatPassword(registertest.ValidRePassword)
                registerpage.agreeCheckbox()
                registerpage.signup()

                
                cy.get(':nth-child(3) > app-validation-message > div > .text-danger').should('have.text','Invalid email address.')

            })
    })

    it('Verify that the user name, can not enter numbers or special characters', function () {

        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then(registertest => {

                headerpage.visit()
                headerpage.signupHeader()
                registerpage.fillName(registertest.InvalidName)
                registerpage.fillUsername(registertest.ValidUsername)
                registerpage.fillEmail(registertest.ValidEmail)
                registerpage.fillTelephone(registertest.ValidTelephoneNo)
                registerpage.fillPassword(registertest.ValidPassword)
                registerpage.fillRepeatPassword(registertest.ValidRePassword)
                registerpage.agreeCheckbox()
                registerpage.signup()

                cy.get('#name-validation > div > .text-danger').should('have.text','can not enter numbers or special characters.')

            })

    })


    it('Verify if the user can not register with an already used username', function () {

        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then(registertest => {

                headerpage.visit()
                headerpage.signupHeader()
                registerpage.fillName(registertest.ValidName)
                registerpage.fillUsername(registertest.AlreadytakenName)
                registerpage.fillEmail(registertest.ValidEmail)
                registerpage.fillTelephone(registertest.ValidTelephoneNo)
                registerpage.fillPassword(registertest.ValidPassword)
                registerpage.fillRepeatPassword(registertest.ValidRePassword)
                registerpage.agreeCheckbox()
                registerpage.signup()

                cy.get(':nth-child(2) > app-validation-message > div > .text-danger').should('have.text','This username is already taken.')

            })

    })
    it('Verify if the user can not register with an invalid Telephone number', function () {

        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then(registertest => {

                headerpage.visit()
                headerpage.signupHeader()
                registerpage.fillName(registertest.ValidName)
                registerpage.fillUsername(registertest.ValidUsername)
                registerpage.fillEmail(registertest.ValidEmail)
                registerpage.fillTelephone(registertest.InvalidTelephoneNo)
                registerpage.fillPassword(registertest.ValidPassword)
                registerpage.fillRepeatPassword(registertest.ValidRePassword)
                registerpage.agreeCheckbox()
                registerpage.signup()

                cy.get(':nth-child(4) > app-validation-message > div > .text-danger').should('have.text','Please enter a valid telephone number, between 7 and 15 numbers.')

            })

    })
    it('Verify if the user can not register with a password that is less than eight characters long', function () {

        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then(registertest => {

                headerpage.visit()
                headerpage.signupHeader()
                registerpage.fillName(registertest.ValidName)
                registerpage.fillUsername(registertest.ValidUsername)
                registerpage.fillEmail(registertest.ValidEmail)
                registerpage.fillTelephone(registertest.ValidTelephoneNo)
                registerpage.fillPassword(registertest.InvalidPassword)
                registerpage.fillRepeatPassword(registertest.ValidRePassword)
                registerpage.agreeCheckbox()
                registerpage.signup()

                cy.get(':nth-child(5) > app-validation-message > div > .text-danger').should('have.text','Minimum length of this field is 8.')


            })

    })
    it('Verify that the password and the repeat password are identical', function () {

        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then(registertest => {

                headerpage.visit()
                headerpage.signupHeader()
                registerpage.fillName(registertest.ValidName)
                registerpage.fillUsername(registertest.ValidUsername)
                registerpage.fillEmail(registertest.ValidEmail)
                registerpage.fillTelephone(registertest.ValidTelephoneNo)
                registerpage.fillPassword(registertest.InvalidPassword1)
                registerpage.fillRepeatPassword(registertest.InvalidRePassword1)
                registerpage.agreeCheckbox()
                registerpage.signup()

                cy.get('div > .text-danger').should('have.text','Password fields did not match.')

            })

    })
    it('Verify that the user password can not be entirely numeric.', function () {

        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then(registertest => {

                headerpage.visit()
                headerpage.signupHeader()
                registerpage.fillName(registertest.ValidName)
                registerpage.fillUsername(registertest.ValidUsername)
                registerpage.fillEmail(registertest.ValidEmail)
                registerpage.fillTelephone(registertest.ValidTelephoneNo)
                registerpage.fillPassword(registertest.Numberpassowrd)
                registerpage.fillRepeatPassword(registertest.Numberpassowrd2)
                registerpage.agreeCheckbox()
                registerpage.signup()

                cy.get(':nth-child(5) > app-validation-message > div > .text-danger').should('have.text','Alpha numeric characters only and should not be entirely numeric.')

            })

    })
    it('Verify if the user can register with valid Data', function () {

        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then(registertest => {

                headerpage.visit()
                headerpage.signupHeader()
                registerpage.fillName(registertest.ValidName)
                registerpage.fillUsername(registertest.ValidUsername)
                registerpage.fillEmail(registertest.ValidEmail)
                registerpage.fillTelephone(registertest.ValidTelephoneNo)
                registerpage.fillPassword(registertest.ValidPassword)
                registerpage.fillRepeatPassword(registertest.ValidRePassword)
                registerpage.agreeCheckbox()
                //registerpage.signup()

            })

    })
    it('Verify if the user can Click on terms and conditions', function () {

        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then(registertest => {

                headerpage.visit()
                headerpage.signupHeader()
                registerpage.termsConditions()
                

            })

    })



})



