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

                advertiserpage.userID(data.ValidUserId)
                advertiserpage.fillTitle(data.InValidTitle)
                advertiserpage.selectCategory()
                advertiserpage.fillDescription(faker.name.jobTitle())
                advertiserpage.nextBtn1()
                advertiserpage.checkTitle()
        
            })

     })

     it('Advertiser test - Advertising Address panel', function()  {
    
        const headerpage = new HeaderPage()
        const loginpage = new LoginPage()
        const advertiserpage = new AdvertiserPage()
        const adminpage = new AdminPage()
        const faker = require('faker');
        cy.clearCookies()
       
        
        cy
            .fixture('advertiser')
            .then(data => {
            

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

                advertiserpage.userID(data.ValidUserId)
                advertiserpage.fillTitle(data.ValidTitle)
                advertiserpage.selectCategory()
                advertiserpage.fillDescription(data.ValidDescription)
                advertiserpage.nextBtn1()
                advertiserpage.fileUpload()
                advertiserpage.nextBtn2()
                advertiserpage.addressNo(data.InValidAdressNO)
                advertiserpage.addressLine1(data.InValidAddressLine1)
                advertiserpage.addressLine2(data.InValidAddressLine2)
                advertiserpage.province(data.InValidProvince)
                advertiserpage.postalcode(data.InValidPosatlCOde)
                advertiserpage.Telephone1(data.InValidTelephoneNo1)
                advertiserpage.Telephone2(data.InValidTelephoneNo2)
                advertiserpage.Email(data.InValidEmail)
                advertiserpage.nextBtn3()
                advertiserpage.checkAddressNO()
                advertiserpage.checkAddressLine1()
                advertiserpage.checkAddressLine2()
                advertiserpage.checkProvince()
                advertiserpage.checkPostalCode()
                advertiserpage.checkTelephoneNumber1()
                advertiserpage.checkTelephoneNumber2()
                advertiserpage.checkEmail() 
               
                
              
        
            })

     })

})