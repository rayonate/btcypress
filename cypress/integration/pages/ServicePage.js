/// <reference types="cypress" />

class ServicePage
{
    gridDay()
    {
        cy.scrollTo(0, 300)
        const button =cy.get('.fc-timeGridDay-button')
        button.click()
    }

    chooseTime()
    {
        cy.get(':nth-child(35) > .fc-timegrid-slot-lane')
        .click()
    }

    bookNow()
    {
        const button = cy.get('.pt-2 > .btn')
        button.click()
    }

    confirm()
    {
        const button = cy.get(':nth-child(2) > .card > .card-body > :nth-child(3) > .pr-2 > .btn')
        button.click()
    }
    
    paymentMethod()
    {
        const button = cy.get('#inlineCheckbox2')
        button.click()
    }

    confirmPayment()
    {
        const button = cy.get('.mt-2 > .text-center > .btn')
        button.click()
    }

    validateAppointment()
    {
        cy.get('.col-sm-7 > .row > .text-body > .font-weight-bold')
        .should('have.text','Rayonate labs')
    }
}
export default ServicePage
