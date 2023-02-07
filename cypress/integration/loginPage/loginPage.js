/// <reference types="Cypress" />

import LoginPage from '../../support/pageObjects/loginPage';
import RegisterPage from '../../support/pageObjects/registerPage';
import HomePage from '../../support/pageObjects/homePage';
import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const homePage = new HomePage();

let data = {};

beforeEach(() => {
    cy.visit(Cypress.env('guru99nsurance'))
    cy.fixture('loginData').then(function (jsonData) {
        data = jsonData
    })
});

Given('User visit the guru99 insurance site and lands on login page', () => {

    cy.title().should('eq', data.pageTitle)
    cy.waitUntil(() => loginPage.getLogincontentText().should('have.text', data.loginText))
})

When('Click register button', () => {

    cy.waitUntil(() => loginPage.clickRegisterButton().should('be.visible').click())
})

And('User can view the register page', () => {

    cy.url().should('include', data.homeUrlIncludes)
})
Then('User should be navigate to register page', () => {

    cy.title().should('eq', data.homePageTitle)
})

And('User enter valid details in the register page', (title,firstName,surName,enterPhoneNumber,selectYear,selectMonth,selectDate,selectLicensePeriodYear,selectOccupation,selectLicensePeriodYe,enterAddress,enterCity,enterCountry,enterPostalCode,enterEmailAddress,enterPassword) => {


    cy.registerAUser(data.title, data.firstName, data.surName, data.enterPhoneNumber, data.selectYear, data.selectMonth, data.selectDate, data.selectLicensePeriodYe, data.selectOccupation, data.selectLicensePeriodYear, data.enterAddress, data.enterCity, data.enterCountry, data.enterPostalCode, data.enterEmailAddress, data.enterPassword)
})

And('User click create button', () => {

    cy.waitUntil(() => registerPage.clickCreateButton().click())
})

Then('user should be navigate to login page', () => {

    cy.title().should('eq', 'Insurance Broker System - Login')
})

/**
 * Verify able to view error message while enter valid mobile number, invalid password
 * 
 */

When('User enter valid emailid and invalid password button', () => {

    cy.waitUntil(() => loginPage.clickEmailBox().type(data.enterEmailAddress))
    cy.waitUntil(() => loginPage.clickPasswordBox().type(data.invalidPassword))
})

And('Click Login button', () => {
    cy.waitUntil(() => loginPage.clickLogin().should('be.visible').click())

})
Then('User should view error message', () => {

    cy.waitUntil(() => loginPage.getErrorMessage().should('have.text', data.errorMessage))
})

/**
 * Verify able to view error message while enter invalid mobile number, valid password
 * 
 */

When('User enter invalid emailid and  valid password button', () => {
    cy.waitUntil(() => loginPage.clickEmailBox().type(data.invalidEmailId))
    cy.waitUntil(() => loginPage.clickPasswordBox().type(data.enterPassword))

})

/**
 * Verify user succssfully loggedin and view home page, while enter valid emailid and valid password
 */

When('User enter valid emailid and password button', () => {
    cy.enterEmailIdPassword(data.enterEmailAddress, data.enterPassword)
})

Then('User should navigate to the home page', () => {

    cy.title().should('eq', data.homePageTitleNew)
    cy.waitUntil(() => homePage.getUserEmail().should('have.text', data.enterEmailAddress))
    cy.waitUntil(() => homePage.clickLogOutButton().first().click())
})
