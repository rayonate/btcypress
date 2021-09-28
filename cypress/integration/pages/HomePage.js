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
    searchService(value)
    {
        const field = cy.get('#service')
        field.type(value)
        return this
    }

    clickSearchBtn()
    {
        const button = cy.get('.fa')
        button.click()
        
    }
    validateSerachName(){

        cy.get('.card-title').should('have.text','Rayonate labs')

    }
    clickServices(){

        const button = cy.get(':nth-child(2) > .row > :nth-child(5) > .card > .card-body > .float-right > .text-right > #book-1')
        button.click()
    }
    validateClickServices(){

        cy.get('.col-sm-7 > .row > .text-body > .font-weight-bold').should('have.text','saloon chandani')

    }
    Hello world

}
export default HomePage
