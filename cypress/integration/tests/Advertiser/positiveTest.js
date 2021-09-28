/// <reference types="cypress" />

import HeaderPage from '../../pages/HeaderPage'
import LoginPage from '../../pages/LoginPage'
import AdvertiserPage from '../../pages/AdvertiserPage'
import AdminPage from '../../pages/AdminPage'




describe('Billionthing Advertiser Test', function()  {

    it('Advertiser', function()  {
    
        const headerpage = new HeaderPage()
        const loginpage = new LoginPage()
        const advertiserpage = new AdvertiserPage()
        const adminpage = new AdminPage()
        const faker = require('faker');
       
        
        cy
            .fixture('advertiser')
            .then( testvaliddata => {
            

                headerpage.visit()
                headerpage.signinHeader()
                loginpage.fillUsername(testvaliddata.ValidUsername)
                loginpage.fillPassword(testvaliddata.ValidPassword)
                loginpage.login()
                cy.wait(5000)
                headerpage.profileMenu();
                headerpage.myProfile();
                adminpage.myAdvertisings();
                adminpage.adProfile();
                adminpage.creatAdvertisments();
                advertiserpage.userID(testvaliddata.ValidUserId)
                advertiserpage.fillTitle(faker.name.title())
                advertiserpage.selectCategory()
                advertiserpage.fillDescription(faker.name.jobTitle())
                advertiserpage.nextBtn1()
                advertiserpage.fileUpload()
                advertiserpage.nextBtn2()
                advertiserpage.addressNo(testvaliddata.ValidAddressNo)
                advertiserpage.addressLine1(faker.address.ordinalDirection())
                advertiserpage.addressLine2(faker.address.secondaryAddress())
                advertiserpage.province(testvaliddata.ValidProvince)
                advertiserpage.postalcode(faker.address.zipCode())
                advertiserpage.Telephone1(testvaliddata.ValidTelephoneNo1)
                advertiserpage.Telephone2(testvaliddata.ValidTelephoneNo2)
                advertiserpage.Email(faker.internet.exampleEmail())
              
        
            })

     })

})