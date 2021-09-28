/// <reference types="cypress" />

class HeaderPage
{

    visit()
    {
        cy
    .fixture('config')
    .then( visitpage => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
      
      cy.visit(visitpage.BaseURL)

        })
    }

    signinHeader()
    {
        const button = cy.get(':nth-child(2) > .btn')
        button.click()
    }

    signupHeader()
    {
        const button = cy.get(':nth-child(3) > .btn')
        button.click()
    }

    profileMenu()
    {
        const button = cy.get('.profile > img')
        button.click()

    }

    myProfile()
    {
        const button = cy.get('.menu > ul > :nth-child(1)')
        button.click({force: true})
        /*cy.get('_ngcontent-bbl-c53')
        cy.get('.menu > ul')
        .find('.menu > ul > :nth-child(1)')
        .contains('MY PROFILE')
        .click({force: true})
        return this
        */
    }


}
export default HeaderPage