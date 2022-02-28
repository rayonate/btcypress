/// <reference types="cypress" />

class ServiceProfilePage
{

    ClickSubmit()
    {
        const button = cy.get('.text-right > .btn')
        button.click()
        
    }
    SelectService()
    {
        const button = cy.get('#category')
        button.select(0)

    }
    businessProfile()
    {
        const button = cy.get('.nav-main > :nth-child(1) > [href="#"]')
        button.click()

    }
    CreatbusinessProfile()
    {
        const button = cy.get('.nav-expanded > .nav > :nth-child(2) > .nav-link')
        button.click()

    }

    FillbusinessName(value)
    {
        const title = cy.get('#businessName')
        title.type(value)
        return this
    }
    FillbusinessSlug(value)
    {
        const button = cy.get('#businessSlug')
        button.type(value)
        return this
    }
    FillDescription(value)
    {
        const button = cy.get('#description')
        button.type(value)
        return this
    }

    FilluserId(value)
    {
        const button = cy.get('#userId')
        button.type(value)
        return this
    }
    ClickNext1()
    {
        const button = cy.get('#businessInfoNextButton')
        button.click()
        
    }

    Fillprovince()
    {
        const button = cy.get('#province')
        button.click()
        
    }

    Fillpostalcode()
    {
        const button = cy.get('#postalCode')
        button.click()
        
    }



}
export default ServiceProfilePage