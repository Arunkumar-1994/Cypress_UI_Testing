/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/homePage';
import LoginPage from '../../support/pageObjects/loginPage';
import RetrieveQuationPage from '../../support/pageObjects/retrieveQuationPage';
import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPage();
const homePage = new HomePage();
const retrieveQuationPage =new RetrieveQuationPage();

let data = {};

beforeEach(() => {
    cy.visit(Cypress.env('guru99nsurance'))
    cy.fixture('insuranceData').then(function (jsonData) {
        data = jsonData
    })
 });
 
 Given('User visit the guru99 insurance site and lands on login page',()=>{
 
    cy.title().should('eq', 'Insurance Broker System - Login')
    cy.waitUntil(() => loginPage.getLogincontentText().should('have.text', 'Login'))
 
 })
 
 When('User enter valid emailid and password button',()=>{
    cy.waitUntil(() => loginPage.clickEmailBox().type('testPurpose@abv.pg'))
    cy.waitUntil(() => loginPage.clickPasswordBox().type('testAbcd123'))
 
 })
 
 And('Click Login button',()=>{
 
    cy.waitUntil(() => loginPage.clickLogin().should('be.visible').click())
 
 
 })
 
 And('User click retrieve quotation tap',()=>{
    
    cy.waitUntil(()=>homePage.clickRetriveQuoation().click())
    cy.waitUntil(()=>homePage.enterIdentifactionNum().type('21313'))
    cy.waitUntil(()=>homePage.clikRetrieveButton().click())
})

 Then('User should be able to view retrieve quotation heading',()=>{
   
    cy.waitUntil(()=>retrieveQuationPage.getRetrieveHeading().should('have.text','Retrieve Quotation'))

 })

 And('User should able to view retrieve quotation table',()=>{

    cy.waitUntil(()=>retrieveQuationPage.getNumberOfRows().each(($el)=> cy.wrap($el).should('be.visible')))
    cy.waitUntil(()=>retrieveQuationPage.getColumnValue().should('have.length','10'))
    cy.waitUntil(()=>retrieveQuationPage.getColumnValue().each(($el)=> cy.wrap($el).should('be.visible')))

 })