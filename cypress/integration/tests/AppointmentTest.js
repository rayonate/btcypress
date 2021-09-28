/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage'
import HeaderPage from '../pages/HeaderPage'
import HomePage from '../pages/HomePage'
import ServicePage from '../pages/ServicePage'

describe('Billionthing Make appointment Test', function()  {

  it('Make appointment with valid User', function()  {

    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    const homepage = new HomePage()
    const servicespage = new ServicePage()
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
    homepage.bookRayonateLabs()
    servicespage.gridDay()
    servicespage.chooseTime()
    servicespage.bookNow()
    servicespage.confirm()
    servicespage.paymentMethod()
    servicespage.confirmPayment()
    servicespage.validateAppointment()
  })

})