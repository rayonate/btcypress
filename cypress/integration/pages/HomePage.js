/// <reference types="cypress" />

class HomePage
{
    registerBusiness()
    {
        cy.get('.asd > .btn')
        .click()
    }

    service()
    {
        const button = cy.get('#service')
        button.click()
    }
    submit()
    {
        const button = cy.get('.text-right > .btn')
        button.click()
    }
    bookRayonateLabs()
    {
        cy.scrollTo(0, 500)
        const button = cy.get(':nth-child(3) > .row > :nth-child(1) > .card > .card-body > .float-right > .text-right > #book-1')
        button.click()
    }

}
export default HomePage
