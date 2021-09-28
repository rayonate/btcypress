/// <reference types="cypress" />

import HeaderPage from '../pages/HeaderPage'
import RegisterPage from '../pages/RegisterPage'

describe('Billionthing Register Test', function()  {

    it('Register New user', function()  {
    
        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        const faker = require('faker')
        cy
            .fixture('register')
            .then( registervalid => {

            headerpage.visit()
            headerpage.signupHeader()
            registerpage.fillName(faker.name.firstName())
            registerpage.fillUsername(faker.name.lastName())
            registerpage.fillEmail(faker.internet.email())
            registerpage.fillTelephone(registervalid.TelephoneNo)
            registerpage.fillPassword(registervalid.Password)
            registerpage.fillRepeatPassword(registervalid.RePassword)
            registerpage.agreeCheckbox()
            registerpage.signup()
            registerpage.validateNewUser(registervalid.SuccessTitle)
        
        })

     })

     it('Register with existing username & email', function()  {
    
        const headerpage = new HeaderPage()
        const registerpage = new RegisterPage()
        cy
            .fixture('register')
            .then( registerExistUsename => {

            headerpage.visit()
            headerpage.signupHeader()
            registerpage.fillName(registerExistUsename.Name)
            registerpage.fillUsername(registerExistUsename.Username)
            registerpage.fillEmail(registerExistUsename.Email)
            registerpage.fillTelephone(registerExistUsename.TelephoneNo)
            registerpage.fillPassword(registerExistUsename.Password)
            registerpage.fillRepeatPassword(registerExistUsename.RePassword)
            registerpage.agreeCheckbox()
            registerpage.signup()
            registerpage.validateExistingUser(registerExistUsename.ExistingUsernameMessage)
        
        })

     })

})