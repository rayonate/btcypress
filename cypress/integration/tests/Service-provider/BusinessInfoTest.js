/// <reference types="cypress" />

import HeaderPage from '../../pages/HeaderPage'
import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'
import AdminPage from '../../pages/AdminPage'
import ServiceProviderPage from '../../pages/ServiceProviderPage'

describe('Billionthing Service Profile Info Test', function()  {

     it('ServiceProvider create with Invalid Business Name', function()  {
    
        const headerpage = new HeaderPage()
        const loginpage = new LoginPage()
        const homepage = new HomePage()
        const adminpage = new AdminPage()
        const servicepage = new ServiceProviderPage()
        const faker = require('faker')
        cy
            .fixture('login')
            .then( serviceprovidervalid => {

            headerpage.visit()
            headerpage.signinHeader()
            loginpage.fillUsername(serviceprovidervalid.AdminUsername)
            loginpage.fillPassword(serviceprovidervalid.AdminPassword)
            loginpage.login()
            cy.wait(5000)
            headerpage.profileMenu()
            headerpage.myProfile()
            cy.wait(5000)
            adminpage.businessProfiles()
            adminpage.createBusinessProfile()
        
        })
        cy
            .fixture('invalidserviceprofile')
            .then( serviceproviderInvalid => {

            servicepage.fillCategory()
            servicepage.fillBusinessName("{enter}")
            servicepage.fillBusinessName(serviceproviderInvalid.ShortBusinessName)
            servicepage.invalidBusinessName(serviceproviderInvalid.ShortBusinessNameError)

        })

     })

     it('ServiceProvider create with Invalid Business Slug', function()  {
    
        const headerpage = new HeaderPage()
        const loginpage = new LoginPage()
        const homepage = new HomePage()
        const adminpage = new AdminPage()
        const servicepage = new ServiceProviderPage()
        const faker = require('faker')
        cy
            .fixture('login')
            .then( serviceprovidervalid => {

            headerpage.visit()
            headerpage.signinHeader()
            loginpage.fillUsername(serviceprovidervalid.AdminUsername)
            loginpage.fillPassword(serviceprovidervalid.AdminPassword)
            loginpage.login()
            cy.wait(5000)
            headerpage.profileMenu()
            headerpage.myProfile()
            cy.wait(5000)
            adminpage.businessProfiles()
            adminpage.createBusinessProfile()
        
        })
        cy
            .fixture('invalidserviceprofile')
            .then( serviceproviderInvalid => {

            servicepage.fillCategory()
            servicepage.fillBusinessName(faker.name.jobArea())
            servicepage.fillBusinessSlug(serviceproviderInvalid.LongBusinessSlug)
            servicepage.infoTab()
            servicepage.invalidBusinessSlug(serviceproviderInvalid.LongBusinessSlugError)
           
        })

     })

     it('ServiceProvider create with Invalid Business description', function()  {
    
        const headerpage = new HeaderPage()
        const loginpage = new LoginPage()
        const homepage = new HomePage()
        const adminpage = new AdminPage()
        const servicepage = new ServiceProviderPage()
        const faker = require('faker')
        cy
            .fixture('login')
            .then( serviceprovidervalid => {

            headerpage.visit()
            headerpage.signinHeader()
            loginpage.fillUsername(serviceprovidervalid.AdminUsername)
            loginpage.fillPassword(serviceprovidervalid.AdminPassword)
            loginpage.login()
            cy.wait(5000)
            headerpage.profileMenu()
            headerpage.myProfile()
            cy.wait(5000)
            adminpage.businessProfiles()
            adminpage.createBusinessProfile()
        
        })
        cy
            .fixture('invalidserviceprofile')
            .then( serviceproviderInvalid => {

            servicepage.fillCategory()
            servicepage.fillBusinessName(faker.name.jobArea())
            servicepage.fillBusinessDes(" ")
            servicepage.infoTab()
            servicepage.invalidBusinessDes(serviceproviderInvalid.InvalidDesError)
           
        })

     })

})