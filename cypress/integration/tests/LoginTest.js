/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage'
import HeaderPage from '../pages/HeaderPage'

describe('Billionthing Login Test', function()  {

  it('Login with invalid Username valid Password', function()  {

    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    const faker = require('faker')
    cy
    .fixture('login')
    .then( testinvaliduser => {

    headerpage.visit()
    headerpage.signinHeader()
    loginpage.fillUsername(faker.name.firstName())
    loginpage.fillPassword(testinvaliduser.ValidPassword)
    loginpage.login()
    loginpage.loginInvalid(testinvaliduser.InvalidMessage)
    })

  })

  it('Login with valid Username invalid Password', function()  {

    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    cy
    .fixture('login')
    .then( testinvalidpw => {

    headerpage.visit()
    headerpage.signinHeader()
    loginpage.fillUsername(testinvalidpw.ValidUsername)
    loginpage.fillPassword(testinvalidpw.InvalidPassword)
    loginpage.login()
    loginpage.loginInvalid(testinvalidpw.InvalidMessage)
    })

  })

  it('Login with invalid Username invalid Password', function()  {

    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    cy
    .fixture('login')
    .then( testinvaliddata => {

    headerpage.visit()
    headerpage.signinHeader()
    loginpage.fillUsername(testinvaliddata.InvalidUsername)
    loginpage.fillPassword(testinvaliddata.InvalidPassword)
    loginpage.login()
    loginpage.loginInvalid(testinvaliddata.InvalidMessage)
  })

})

  it('Login with valid Username valid Password', function()  {

    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    cy
    .fixture('login')
    .then( testvaliddata => {

    headerpage.visit()
    headerpage.signinHeader()
    loginpage.fillUsername(testvaliddata.ValidUsername)
    loginpage.fillPassword(testvaliddata.ValidPassword)
    loginpage.login()
    loginpage.loginValid(testvaliddata.SuccessTitle)
    })

  })

  it('forgot password link redirects to the relevant page. ', function()  {

    const serverId ='cyrn4tn4'
    const serverDomain = 'cyrn4tn4.mailosaur.net'
    const emailAddress ='pasword-reset@'+serverDomain //pasword-reset@cyrn4tn4.mailosaur.net
    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    let passwordResetLink;
    cy
    .fixture('login')
    .then( testvaliddata => {

      headerpage.visit()
      headerpage.signinHeader()
      loginpage.forgotpasswordLink()
      cy.get('.form-signin > #email').type(emailAddress)
      cy.get('.form-signin > .btn').click()

      cy.mailosaurGetMessage(serverId, {
        sentTo: emailAddress
    }).then(email => {
        expect(email.subject)
        passwordResetLink = email.text.links[0].href;
    })
      //cy.get('.col-sm-9 > .card > .card-body > .card-title').should('contain', testvaliddata.ForgotPassword)

    
    })

  })

})