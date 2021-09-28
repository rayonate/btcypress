/// <reference types="cypress" />

class AdvertiserPage
{
    selectRole()
    {
        const role = cy.get("//input[@id='advertiser']")
        role.click()
       
        
    }

    clickSubmitBtn()
    {
        const submitBtn = cy.get("//button[normalize-space()='Submit']")
        submitBtn.click()
    }

    fillUserID()
    {
        const userID = cy.get('')
        submitBtn.click()
    }
    userID(value)
    {
        const title = cy.get(':nth-child(1) > .col-lg-7 > .form-control')
        title.type(value)
        return this
    }
    fillTitle(value)
    {
        const title = cy.get(':nth-child(2) > .col-lg-7 > .form-control')
        title.type(value)
        return this
    }

    checkTitle(){

        cy.get(':nth-child(2) > .col-lg-7 > app-validation-message > div').should('have.text','Maximum length of this field is 30.')

    }
    selectCategory()
    {
        cy.get('#category')
        .select('Saloon')
        //.should('have.value','Saloon')


    }

    fillDescription (value)
    {
        const description = cy.get(':nth-child(4) > .col-lg-7 > .form-control')
        description.type(value)
        return this
    }
    checkDescription(){

        cy.get('div > .text-danger').should('have.text','This field is required')

    }

    nextBtn1()
    {
        const nextBtn = cy.get('.next > .btn')
        nextBtn.click()

    }
    

    fileUpload(value)
    {
        const pcimg = 'profilePic.jpeg';
        cy.get('#image').attachFile(pcimg);
        
        
    }
    nextBtn2()
    {
        const nextBtn = cy.get('.next > .btn')
        nextBtn.click()
    }
    addressNo(value)
    {
        const addresNo = cy.get('#addressNo')
        addresNo.type(value)
        return this
    }
    checkAddressNO(){

        cy.get(':nth-child(1) > .col-lg-7 > app-validation-message > div').should('have.text','Maximum length of this field is 12.') 

    }
    addressLine1(value)
    {
        const addresLine1 = cy.get('#addressLine1')
        addresLine1.type(value)
        return this
    }
    checkAddressLine1(){

        cy.get(':nth-child(2) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','Maximum length of this field is 12.') 

    }

    addressLine2(value)
    {
        const addresLine2 = cy.get('#addressLine2')
        addresLine2.type(value)
        return this
    }
    checkAddressLine2(){

        cy.get(':nth-child(3) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','Maximum length of this field is 12.') 

    }
    province(value)
    {
        const province = cy.get('#province')
        province.type(value)
        return this
    }
    checkProvince(){

        cy.get(':nth-child(4) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','Maximum length of this field is 12.') 

    }
    postalcode(value)
    {
        const province = cy.get('#postalCode')
        province.type(value)
        return this
    }
    checkPostalCode(){

        cy.get(':nth-child(5) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','This field should be only numeric') 

    }
    Telephone1(value)
    {
        const tele1 = cy.get('#telephone_one')
        tele1.type(value)
        return this
    }
    checkTelephoneNumber1(){

        cy.get(':nth-child(6) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','Please enter a valid telephone number, between 7 and 15 numbers.') 

    }
    Telephone2(value)
    {
        const tele2 = cy.get('#telephone_two')
        tele2.type(value)
        return this
    }
    checkTelephoneNumber2(){

        cy.get(':nth-child(7) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','Please enter a valid telephone number, between 7 and 15 numbers.') 

    }
    Email(value)
    {
        const email = cy.get('#email')
        email.type(value)
        return this
    }
    checkEmail(){

        cy.get(':nth-child(8) > .col-lg-7 > app-validation-message > div > .text-danger').should('have.text','Invalid email address.') 

    }
    nextBtn3()
    {
        const nextBtn = cy.get('.next > .btn')
        nextBtn.click()
    }




    
    





}
export default AdvertiserPage