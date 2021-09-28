/// <reference types="cypress" />

class ServiceProviderPage
{
    infoTab()
    {
        cy.get('.col-lg-3-5').click()
    }

    addressTab()
    {
        cy.get('.col-lg-3-5').click()
    }

    fillCategory()
    {
        cy.get('#category').select('Saloon')  
    }

    fillBusinessName(value)
    {
        const field = cy.get('#businessName')
        field.type(value)
        return this
    }

    fillBusinessSlug(value)
    {
        const field = cy.get('#businessSlug')
        field.type(value)
        return this
    }

    fillBusinessDes(value)
    {
        const field = cy.get('#description')
        field.type(value)
        return this
    }

    fillUid(value)
    {
        const field = cy.get('#userId')
        field.type(value)
        return this
    }

    fillAddressNo(value)
    {
        const field = cy.get('#addressNo')
        field.type(value)
        return this
    }

    fillAddress1(value)
    {
        const field = cy.get('#addressLine1')
        field.type(value)
        return this
    }

    fillAddress2(value)
    {
        const field = cy.get('#addressLine2')
        field.type(value)
        return this
    }

    fillProvince(value)
    {
        const field = cy.get('#province')
        field.type(value)
        return this
    }

    fillPostcode(value)
    {
        const field = cy.get('#postalCode')
        field.type(value)
        return this
    }

    fillTelephone1(value)
    {
        const field = cy.get('#telephone_one')
        field.type(value)
        return this
    }

    fillTelephone2(value)
    {
        const field = cy.get('#telephone_two')
        field.type(value)
        return this
    }

    fillEmail(value)
    {
        const field = cy.get('#email')
        field.type(value)
        return this
    }

    fillLocation(value)
    {
        const field = cy.get('#location-search')
        field.type(value).type('{enter}')
        return this
    }

    fillAwardName(value)
    {
        const field = cy.get('#awardName')
        field.type(value)
        return this
    }

    fillAwardDes(value)
    {
        const field = cy.get('#awardsDescription')
        field.type(value)
        return this
    }

    fillServiceName1(value)
    {
        const field = cy.get('#serviceName')
        field.type(value)
        return this
    }

    fillServiceName2(value)
    {
        const field = cy.get(':nth-child(10) > .col-lg-7 > #serviceName')
        field.type(value)
        return this
    }

    fillServiceDetails1(value)
    {
        const field = cy.get('#serviceDetails')
        field.type(value)
        return this
    }

    fillServiceDetails2(value)
    {
        const field = cy.get(':nth-child(11) > .col-lg-7 > #serviceDetails')
        field.type(value)
        return this
    }

    fillServicePrice1(value)
    {
        const field = cy.get('#servicePrice')
        field.type(value)
        return this
    }

    fillServicePrice2(value)
    {
        const field = cy.get(':nth-child(12) > .col-lg-7 > #servicePrice')
        field.type(value)
        return this
    }

    fillServiceDuration1(value)
    {
        const field = cy.get('#serviceDuration')
        field.type(value)
        return this
    }

    fillServiceDuration2(value)
    {
        const field = cy.get(':nth-child(13) > .col-lg-7 > #serviceDuration')
        field.type(value)
        return this
    }

    fillStaffName1(value)
    {
        const field = cy.get('#staffName')
        field.type(value)
        return this
    }

    fillStaffName2(value)
    {
        const field = cy.get(':nth-child(11) > .col-lg-7 > #staffName')
        field.type(value)
        return this
    }

    fillStaffDes1(value)
    {
        const field = cy.get('#staffDescription')
        field.type(value)
        return this
    }

    fillStaffDes2(value)
    {
        const field = cy.get(':nth-child(12) > .col-lg-7 > #staffDescription')
        field.type(value)
        return this
    }

    businessInfoNext()
    {
        const button = cy.get('#businessInfoNextButton')
        button.click()
    }

    businessAddressNext()
    {
        const button = cy.get('#addressNextButton')
        button.click()
    }

    addAnotherAward()
    {
        const button = cy.get('.mt-5 > .btn')
        button.click({force: true})
    }

    businessGalleryNext()
    {
        const button = cy.get('.next > .btn')
        button.click({force: true})
    }

    businessHoursNext()
    {
        const button = cy.get('.finish > .btn')
        button.click({force: true})
    }

    addAnotherService()
    {
        const button = cy.get('.mt-5 > .btn')
        button.click({force: true})
    }

    businessServicesNext()
    {
        const button = cy.get('.finish > .btn')
        button.click({force: true})
    }

    addAnotherStaff()
    {
        const button = cy.get('.mt-5 > .btn')
        button.click({force: true})
    }

    businessStaffNext()
    {
        const button = cy.get('.finish > .btn')
        button.click({force: true})
    }

    previousPage()
    {
        const button = cy.get('.previous > .btn')
        button.click({force: true})
    }

    finishProfile()
    {
        const button = cy.get('.finish > .btn')
        button.click({force: true})
    }

    firstTheme()
    {
        const button = cy.get(':nth-child(1) > .form-check > .form-check-label > img')
        button.click({force: true})
    }

    secondTheme()
    {
        const button = cy.get(':nth-child(2) > .form-check > .form-check-label > img')
        button.click({force: true})
    }

    thirdTheme()
    {
        const button = cy.get(':nth-child(3) > .form-check > .form-check-label > img')
        button.click({force: true})
    }

    fourthTheme()
    {
        const button = cy.get(':nth-child(4) > .form-check > .form-check-label > img')
        button.click({force: true})
    }

    chooseLogo()
    {
        const filepath = 'images/logo.jpg'
        cy.get('#image').attachFile(filepath)
        return this
    }

    chooseGallery1()
    {
        const filepath = 'images/gallery1.jpg'
        cy.get('#image-gallery').attachFile(filepath)
        return this
    }

    chooseGallery2()
    {
        const filepath = 'images/gallery2.jpg'
        cy.get('#image-gallery').attachFile(filepath)
        return this
    }

    chooseAward()
    {
        const filepath = 'images/companyPic.png'
        cy.get('#awardImage').attachFile(filepath)
        return this
    }

    chooseFacial()
    {
        const filepath = 'images/facial.jpg'
        cy.get('[id="serviceImage-0\}"]').attachFile(filepath)
        return this
    }

    chooseHair()
    {
        const filepath = 'images/hair.jpg'
        cy.get('[id="serviceImage-1\}"]').attachFile(filepath)
        return this
    }

    chooseStaff1()
    {
        const filepath = 'images/staff1.jpg'
        cy.get('#profileImage').attachFile(filepath)
        return this
    }

    chooseStaff2()
    {
        const filepath = 'images/staff2.jpg'
        cy.get('#profileImage').attachFile(filepath)
        return this
    }

    validServiceProfile(value)
    {
        cy.get('.row > :nth-child(1) > .text-center').should('contain',value)
    }

    invalidBusinessName(value)
    {
        cy.get(':nth-child(2) > .col-lg-7').should('have.text',value)
    }

    invalidBusinessSlug(value)
    {
        cy.get(':nth-child(3) > .col-lg-7').should('have.text',value)
    }

    invalidBusinessDes(value)
    {
        cy.get('app-validation-message > div').should('have.text',value)
    }

    invalidAddressNo(value)
    {
        cy.get(':nth-child(1) > .col-lg-7').should('have.text',value)
    }

    invalidProvince(value)
    {
        cy.get(':nth-child(4) > .col-lg-7').should('have.text',value)
    }

    invalidPostalcode(value)
    {
        cy.get(':nth-child(5) > .col-lg-7').should('have.text',value)
    }

    invalidTelephoneNumber(value)
    {
        cy.get(':nth-child(6) > .col-lg-7').should('have.text',value)
    }

    invalidEmailAddress(value)
    {
        cy.get(':nth-child(8) > .col-lg-7').should('have.text',value)
    }

}
export default ServiceProviderPage
