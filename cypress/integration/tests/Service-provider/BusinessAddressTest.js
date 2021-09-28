/// <reference types="cypress" />

import HeaderPage from '../../pages/HeaderPage'
import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'
import AdminPage from '../../pages/AdminPage'
import ServiceProviderPage from '../../pages/ServiceProviderPage'

describe('Billionthing Service Profile Business Address Test', function()  {
   
    it('ServiceProvider craete with Invalid Address No ', function()  {
    
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
            servicepage.fillBusinessSlug(faker.name.jobType())
            servicepage.fillBusinessDes(faker.name.jobDescriptor())
            servicepage.fillUid(serviceproviderInvalid.userid)
            servicepage.businessInfoNext()

            servicepage.fillAddressNo(serviceproviderInvalid.InvalidAddressNo)
            servicepage.addressTab()
            servicepage.invalidAddressNo(serviceproviderInvalid.InvalidAddressNoError)
            
        })

     })

    
    it('ServiceProvider craete with Invalid Province ', function()  {
    
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
            servicepage.fillBusinessSlug(faker.name.jobType())
            servicepage.fillBusinessDes(faker.name.jobDescriptor())
            servicepage.fillUid(serviceproviderInvalid.userid)
            servicepage.businessInfoNext()

            servicepage.fillAddressNo(faker.address.zipCode())
            servicepage.fillProvince(serviceproviderInvalid.InvalidProvince)
            servicepage.addressTab()
            servicepage.invalidProvince(serviceproviderInvalid.InvalidProvinceError)
            
        })

     })

     it('ServiceProvider craete with Invalid Postal code ', function()  {
    
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
            servicepage.fillBusinessSlug(faker.name.jobType())
            servicepage.fillBusinessDes(faker.name.jobDescriptor())
            servicepage.fillUid(serviceproviderInvalid.userid)
            servicepage.businessInfoNext()

            servicepage.fillAddressNo(faker.address.zipCode())
            servicepage.fillPostcode(faker.phone.phoneNumber())
            servicepage.addressTab()
            servicepage.invalidPostalcode(serviceproviderInvalid.InvalidPostcodeError)
            
        })

     })

    it('ServiceProvider craete with Invalid Telephone number ', function()  {
        
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
            servicepage.fillBusinessSlug(faker.name.jobType())
            servicepage.fillBusinessDes(faker.name.jobDescriptor())
            servicepage.fillUid(serviceproviderInvalid.userid)
            servicepage.businessInfoNext()

            servicepage.fillAddressNo(faker.address.zipCode())
            servicepage.fillTelephone1(serviceproviderInvalid.InvalidPhone)
            servicepage.addressTab()
            servicepage.invalidTelephoneNumber(serviceproviderInvalid.InvalidPhoneError)
        })

    })
    
    it('ServiceProvider craete with Invalid Email Address ', function()  {
    
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
            servicepage.fillBusinessSlug(faker.name.jobType())
            servicepage.fillBusinessDes(faker.name.jobDescriptor())
            servicepage.fillUid(serviceproviderInvalid.userid)
            servicepage.businessInfoNext()
    
            servicepage.fillAddressNo(faker.address.zipCode())
            servicepage.fillEmail(serviceproviderInvalid.InvalidPhone)
            servicepage.addressTab()
            servicepage.invalidEmailAddress(serviceproviderInvalid.InvalidEmailError)
        })
    
     })

})