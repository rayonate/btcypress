/// <reference types="cypress" />

import HeaderPage from '../../pages/HeaderPage'
import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'
import AdminPage from '../../pages/AdminPage'
import ServiceProviderPage from '../../pages/ServiceProviderPage'

describe('Billionthing Service Profile Create Test', function()  {

    it('ServiceProvider', function()  {
    
        const headerpage = new HeaderPage()
        const loginpage = new LoginPage()
        const homepage = new HomePage()
        const adminpage = new AdminPage()
        const servicepage = new ServiceProviderPage()
        cy
            .fixture('login')
            .then( serviceprovidervalid => {

            headerpage.visit()
            headerpage.signinHeader()
            loginpage.fillUsername(serviceprovidervalid.AdminUsername)
            loginpage.fillPassword(serviceprovidervalid.AdminPassword)
            loginpage.login()
            cy.wait(5000)
            //homepage.registerBusiness()
            //homepage.service()
            //homepage.submit()
            headerpage.profileMenu()
            headerpage.myProfile()
            adminpage.businessProfiles()
            adminpage.createBusinessProfile()
        
        })
        cy
            .fixture('serviceprovider')
            .then( serviceprovidervalid => {

            servicepage.fillCategory()
            servicepage.fillBusinessName(serviceprovidervalid.BusinessName)
            servicepage.fillBusinessSlug(serviceprovidervalid.BusinessSlug)
            servicepage.fillBusinessDes(serviceprovidervalid.Description)
            servicepage.fillUid(serviceprovidervalid.userid)
            servicepage.businessInfoNext()

            servicepage.fillAddressNo(serviceprovidervalid.No)
            servicepage.fillAddress1(serviceprovidervalid.AddressLine1)
            servicepage.fillAddress2(serviceprovidervalid.AddressLine2)
            servicepage.fillProvince(serviceprovidervalid.Province)
            servicepage.fillPostcode(serviceprovidervalid.PostalCode)
            servicepage.fillTelephone1(serviceprovidervalid.telephone1)
            servicepage.fillTelephone2(serviceprovidervalid.telephone2)
            servicepage.fillEmail(serviceprovidervalid.Email)
            servicepage.fillLocation(serviceprovidervalid.Location)
            servicepage.businessAddressNext()
           
            servicepage.chooseLogo()
            servicepage.chooseGallery1()
            servicepage.chooseGallery2()
            servicepage.fillAwardName(serviceprovidervalid.AwardName)
            servicepage.fillAwardDes(serviceprovidervalid.AwardDescription)
            servicepage.chooseAward()
            servicepage.businessGalleryNext()

            servicepage.businessHoursNext()

            servicepage.fillServiceName1(serviceprovidervalid.ServiceTitle1)
            servicepage.fillServiceDetails1(serviceprovidervalid.ServiceDiscription1)
            servicepage.fillServicePrice1(serviceprovidervalid.Price1)
            servicepage.fillServiceDuration1(serviceprovidervalid.Duration1)
            servicepage.chooseFacial()
            cy.wait(3000)
            servicepage.addAnotherService()
            servicepage.fillServiceName2(serviceprovidervalid.ServiceTitle2)
            servicepage.fillServiceDetails2(serviceprovidervalid.ServiceDiscription2)
            servicepage.fillServicePrice2(serviceprovidervalid.Price2)
            servicepage.fillServiceDuration2(serviceprovidervalid.Duration2)
            servicepage.chooseHair()
            cy.wait(3000)
            servicepage.businessServicesNext()

            servicepage.fillStaffName1(serviceprovidervalid.Staff1)
            servicepage.fillStaffDes1(serviceprovidervalid.StaffDescription1)
            servicepage.chooseStaff1()
            cy.wait(3000)
            servicepage.addAnotherStaff()
            servicepage.fillStaffName2(serviceprovidervalid.Staff2)
            servicepage.fillStaffDes2(serviceprovidervalid.StaffDescription2)
            servicepage.chooseStaff2()
            servicepage.businessStaffNext()
            cy.wait(3000)

            servicepage.firstTheme()
            servicepage.finishProfile()
            servicepage.validServiceProfile(serviceprovidervalid.SuccessTitle)

        })

     })

})