// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-wait-until';

Cypress.on('uncaught:exception', (err, runnable) => {
    
    // failing the test
    // returning false here prevents Cypress from
    return false

})

Cypress.Commands.add("registerAUser",(title,firstName,surName,enterPhoneNumber,selectYear,selectMonth,selectDate,selectLicensePeriodYear,selectOccupation,selectLicensePeriodYear,enterAddress,enterCity,enterCountry,enterPostalCode,enterEmailAddress,enterPassword)=>{


    registerPage.selectTitle().select(title,{force:true})
    registerPage.selectTitle().should('have.value',title)
    registerPage.enterFirstName().type(firstName)
    registerPage.enterSurName().type(surName)
    registerPage.enterPhoneNumber().type(enterPhoneNumber)
    registerPage.selectYear().select(selectYear)
    registerPage.selectYear().should('have.value',selectYear)
    registerPage.selectMonth().select(selectMonth)
    registerPage.selectDate().select(selectDate)
    registerPage.selectMonth().should('have.value',selectMonth)
    registerPage.selectDate().should('have.value',selectDate)
    registerPage.checkLicenceType().last().click()
    registerPage.selectLicensePeriod().select(selectLicensePeriodYear)
    registerPage.selectOccupation().select(selectOccupation)
    registerPage.selectLicensePeriod().should('have.value',selectLicensePeriodYear)
    registerPage.enterAddressStreet().type(enterAddress)
    registerPage.enterCityName().type(enterCity)
    registerPage.enterCountryName().type(enterCountry)
    registerPage.enterPostCode().type(enterPostalCode)
    registerPage.enterEmailAddress().type(enterEmailAddress)
    registerPage.enterPassword().type(enterPassword)
    registerPage.enterConfirmPassword().type(enterPassword)
})

Cypress.Commands.add("enterEmailIdPassword",(enterEmailAddress,enterPassword)=>{

    cy.waitUntil(() => loginPage.clickEmailBox().type(enterEmailAddress))
    cy.waitUntil(() => loginPage.clickPasswordBox().type(enterPassword))


})



    