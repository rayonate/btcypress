/// <reference types="cypress" />

class AdminPage
{
    businessProfiles()
    {
        const button = cy.get('.nav-main > :nth-child(1) > [href="#"]')
        button.click({force: true})
    }

    createBusinessProfile()
    {
        const button = cy.get('.nav-expanded > .nav > :nth-child(2) > .nav-link')
        button.click({force: true})
    }

    myAdvertisings()
    {
        const button = cy.get('#menu > .nav-main > :nth-child(1) > :nth-child(1)')
        button.click()
    }

    adProfile()
    {
        const button = cy.get('.nav-expanded > :nth-child(2) > :nth-child(2) > [href="#"]')
        button.click()
    }
    
    creatAdvertisments()
    {
        const button = cy.get('.nav-expanded > .nav > :nth-child(4) > .nav-link')
        button.click()
    }

}
export default AdminPage
