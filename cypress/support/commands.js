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
import LoginPage from '../support/pageObjects/loginPage';
import RegisterPage from '../support/pageObjects/registerPage';
import HomePage from '../support/pageObjects/homePage';
import RequestQuationPage from '../support/pageObjects/requestQuationPage';

const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const homePage = new HomePage();
const requestQuationPage = new RequestQuationPage();



Cypress.on('uncaught:exception', (err, runnable) => {
    
    // failing the test
    // returning false here prevents Cypress from
    return false

})

Cypress.Commands.add("registerAUser",(title,firstName,surName,enterPhoneNumber,selectYear,selectMonth,selectDate,selectLicensePeriodYe,selectOccupation,selectLicensePeriodYear,enterAddress,enterCity,enterCountry,enterPostalCode,enterEmailAddress,enterPassword)=>{


    registerPage.selectTitle().select(title,{force:true})
    registerPage.selectTitle().should('have.value',title)
    registerPage.enterFirstName().type(firstName)
    registerPage.enterSurName().type(surName)
    registerPage.enterPhoneNumber().type(enterPhoneNumber)
    registerPage.selectYear().select(selectYear)
    registerPage.selectYear().should('have.value',selectYear)
    registerPage.selectMonth().select(selectMonth)
    registerPage.selectDate().select(selectDate) 
    registerPage.selectDate().should('have.value',selectDate)
    registerPage.checkLicenceType().last().click()
    registerPage.selectLicensePeriod().select(selectLicensePeriodYear)
    registerPage.selectOccupation().select(selectOccupation)
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


Cypress.Commands.add("createRequestQuotation",(requestText,enterIncidents,enterVechicleRegistration,enterEstimatedValue,enterAnnualMileage,selectParkingLocation,selectYearStateOfPolicy,selectMonthStateOfPolicy,selectDateStateOfPolicy)=>{

    cy.waitUntil(()=>requestQuationPage.getQuationext().should('have.text',requestText))
    cy.waitUntil(()=>requestQuationPage.selectQuoationBreakDownCover().select('4'))
    cy.waitUntil(()=>requestQuationPage.selectWindScreenRepair().first().click())
    cy.waitUntil(()=>requestQuationPage.enterIncidents().type(enterIncidents))
    cy.waitUntil(()=>requestQuationPage.enterVechicleRegistration().type(enterVechicleRegistration))
    cy.waitUntil(()=>requestQuationPage.enterEstimatedValue().type(enterEstimatedValue))
    cy.waitUntil(()=>requestQuationPage.enterAnnualMileage().type(enterAnnualMileage))
    cy.waitUntil(()=>requestQuationPage.selectParkingLocation().select(selectParkingLocation))
    cy.waitUntil(()=>requestQuationPage.selectYearStateOfPolicy().select(selectYearStateOfPolicy))
    cy.waitUntil(()=>requestQuationPage.selectMonthStateOfPolicy().select(selectMonthStateOfPolicy))
    cy.waitUntil(()=>requestQuationPage.selectDateStateOfPolicy().select(selectDateStateOfPolicy))
 



})


    