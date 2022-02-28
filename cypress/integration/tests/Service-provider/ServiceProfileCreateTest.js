/// <reference types="cypress" />


import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import HeaderPage from '../../pages/HeaderPage'
import ServicePage from '../../pages/ServicePage'
import ServiceProfilePage from '../../pages/ServiceProfilePage'



describe('Billionthing ServiceProfile Creation test ', function()  {

    it('Verify if the user can navigate to Create service providers Business Page  ', function()  {
  
      const loginpage = new LoginPage()
      const headerpage = new HeaderPage()
      const serviceProfilePage =new ServiceProfilePage()
      cy
      .fixture('Service')
      .then( testvaliddata => { 
      headerpage.visit()
      headerpage.signinHeader()
      loginpage.fillUsername(testvaliddata.ValidUsername)
      loginpage.fillPassword(testvaliddata.ValidPassword)
      loginpage.login()
      cy.clearCookies()
      cy.wait(1000)
      headerpage.registerBusinessHeader()
      serviceProfilePage.ClickSubmit()
      serviceProfilePage.SelectService()
      cy.get('.col-lg-2-5 > .card-big-info-title').should('be.visible')
    
      })
  
    })
    it('Verify that mandatory field validation -Business info tab  ', function()  {
  
      const loginpage = new LoginPage()
      const headerpage = new HeaderPage()
      const serviceProfilePage =new ServiceProfilePage()
      cy
      .fixture('Service')
      .then( testvaliddata => { 
      headerpage.visit()
      headerpage.signinHeader()
      loginpage.fillUsername(testvaliddata.ValidUsername)
      loginpage.fillPassword(testvaliddata.ValidPassword)
      loginpage.login()
      cy.clearCookies()
      cy.wait(1000)
      headerpage.registerBusinessHeader()
      serviceProfilePage.ClickSubmit()
      serviceProfilePage.SelectService()
      cy.get('.col-lg-2-5 > .card-big-info-title').should('be.visible')
      serviceProfilePage.ClickNext1()
      cy.wait(1000)

      //Check mandatory fileds 
      cy.get(':nth-child(2) > .col-lg-7 > app-validation-message > div').should('have.text','This field is required')
      cy.get(':nth-child(3) > .col-lg-7 > app-validation-message > div').should('have.text','This field is required')
      cy.get(':nth-child(4) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','This field is required')
      cy.clearCookies()
      
    
      })
  
    })




    it('Verify that the Business name, can not enter numbers or special characters.--Business info tab ', function()  {
  
      const loginpage = new LoginPage()
      const headerpage = new HeaderPage()
      const serviceProfilePage =new ServiceProfilePage()
      cy.clearCookies()
      cy
      .fixture('Service')
      .then( testdata => { 
      headerpage.visit()
      headerpage.signinHeader()
      loginpage.fillUsername(testdata.ValidUsername)
      loginpage.fillPassword(testdata.ValidPassword)
      loginpage.login()
      cy.clearCookies()
      cy.wait(3000)
      headerpage.registerBusinessHeader()
      serviceProfilePage.ClickSubmit()
      serviceProfilePage.SelectService()
      cy.get('.col-lg-2-5 > .card-big-info-title').should('be.visible')
      serviceProfilePage.FillbusinessName(testdata.InvalidBusinessName)
      serviceProfilePage.FillbusinessSlug(testdata.BusinessSlu2)
      serviceProfilePage.FillDescription(testdata.Description)
      cy.wait(3000)
      serviceProfilePage.ClickNext1()
      cy.clearCookies()

      cy.get(':nth-child(2) > .col-lg-7 > app-validation-message > div').should('have.text','Alpha numeric characters only and should not be entirely numeric')
      cy.clearCookies()
      
      
  
  
      })
  

  })

  it('Verify that the Business Slug, can not enter  numbers or special characters.-Business info tab', function()  {
  
    const loginpage = new LoginPage()
      const headerpage = new HeaderPage()
      const serviceProfilePage =new ServiceProfilePage()
      cy
      .fixture('Service')
      .then( testdata => { 
      headerpage.visit()
      headerpage.signinHeader()
      loginpage.fillUsername(testdata.ValidUsername)
      loginpage.fillPassword(testdata.ValidPassword)
      loginpage.login()
      cy.clearCookies()
      cy.wait(1000)
      headerpage.registerBusinessHeader()
      serviceProfilePage.ClickSubmit()
      serviceProfilePage.SelectService()
      cy.get('.col-lg-2-5 > .card-big-info-title').should('be.visible')
      serviceProfilePage.FillbusinessName(testdata.BusinessName)
      serviceProfilePage.FillbusinessSlug(testdata.InvalidBusinessSlug)
      serviceProfilePage.FillDescription(testdata.Description)
      cy.wait(3000)
      serviceProfilePage.ClickNext1()
      cy.clearCookies()

      cy.get(':nth-child(3) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','Alpha numeric characters only and should not be entirely numeric.')
      cy.clearCookies()
    
  
    })

  })
  it('Verify that the Province  can not enter numbers or special characters.-Business address tab', function()  {
  
    const loginpage = new LoginPage()
      const headerpage = new HeaderPage()
      const serviceProfilePage =new ServiceProfilePage()
      cy
      .fixture('Service')
      .then( testdata => { 
      headerpage.visit()
      headerpage.signinHeader()
      loginpage.fillUsername(testdata.ValidUsername)
      loginpage.fillPassword(testdata.ValidPassword)
      loginpage.login()
      cy.clearCookies()
      cy.wait(1000)
      headerpage.registerBusinessHeader()
      serviceProfilePage.ClickSubmit()
      serviceProfilePage.SelectService()
      cy.get('.col-lg-2-5 > .card-big-info-title').should('be.visible')
      serviceProfilePage.FillbusinessName(testdata.BusinessName)
      serviceProfilePage.FillbusinessSlug(faker.name.jobTitle())
      serviceProfilePage.FillDescription(testdata.Description)
      cy.wait(3000)
      serviceProfilePage.ClickNext1()
      cy.clearCookies()

      serviceProfilePage.ClickNext1()
      serviceProfilePage.Fillprovince(testdata.Province)

      cy.get(':nth-child(4) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','can not enter numbers or special characters.')
      cy.clearCookies()
    
  
    })

  })

  it('Verify that the Province  can not enter numbers or special characters.-Business address tab', function()  {
  
    const loginpage = new LoginPage()
      const headerpage = new HeaderPage()
      const serviceProfilePage =new ServiceProfilePage()
      const faker = require('faker');
      cy
      .fixture('Service')
      .then( testdata => { 
      headerpage.visit()
      headerpage.signinHeader()
      loginpage.fillUsername(testdata.ValidUsername)
      loginpage.fillPassword(testdata.ValidPassword)
      loginpage.login()
      cy.clearCookies()
      cy.wait(1000)
      headerpage.registerBusinessHeader()
      serviceProfilePage.ClickSubmit()
      serviceProfilePage.SelectService()
      cy.get('.col-lg-2-5 > .card-big-info-title').should('be.visible')
      serviceProfilePage.FillbusinessName(testdata.BusinessName)
      serviceProfilePage.FillbusinessSlug(faker.name.jobTitle())
      serviceProfilePage.FillDescription(testdata.Description)
      cy.wait(3000)
      serviceProfilePage.ClickNext1()
      cy.clearCookies()

      serviceProfilePage.ClickNext1()
      serviceProfilePage.Fillpostalcode(testdata.PosatalCode)

      cy.get(':nth-child(5) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','This field should be only numeric')
      cy.clearCookies()
    
  
    })

  })

  
  })

  