/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/homePage';
import LoginPage from '../../support/pageObjects/loginPage';
import EditProfillePage from '../../support/pageObjects/editProfillePage';
import RegisterPage from '../../support/pageObjects/registerPage';
import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPage();
const homePage = new HomePage();
const editProfillePage =new EditProfillePage();
const registerPage = new RegisterPage();

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
 
 And('User click edit profile tab',()=>{
    
    cy.waitUntil(()=>homePage.clickEditProfile().click())
 })

 Then('User should view text Editing user profile details',()=>{

    cy.waitUntil(()=>editProfillePage.getEditProfileHeading().should('have.text','Editing user profile'))

 })
        
 And('User update the user profile details',()=>{

    registerPage.enterCityName().type('Mangalore')
    registerPage.enterAddressStreet().type('madiwala street')
    registerPage.selectOcupation().select('Lawyer')
 })
 
 And('User click update user button',()=>{

    editProfillePage.clickUpdateUser().click({force:true})
 }) 