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
let data1 = {};

beforeEach(() => {
    cy.visit(Cypress.env('guru99nsurance'))
    cy.fixture('editProfileData').then(function (jsonData) {
        data1 = jsonData
    })
    cy.fixture('loginData').then(function (jsonData) {
      data = jsonData
  })
 });
 
 Given('User visit the guru99 insurance site and lands on login page',()=>{
 
   cy.title().should('eq', data.pageTitle)
   cy.waitUntil(() => loginPage.getLogincontentText().should('have.text', data.loginText))  
 })
 
 When('User enter valid emailid and password button',()=>{
   cy.enterEmailIdPassword(data.enterEmailAddress, data.enterPassword)
 })
 
 And('Click Login button',()=>{
 
    cy.waitUntil(() => loginPage.clickLogin().should('be.visible').click())
 
 
 })
 
 And('User click edit profile tab',()=>{
    
    cy.waitUntil(()=>homePage.clickEditProfile().click())
 })

 Then('User should view text Editing user profile details',()=>{

    cy.waitUntil(()=>editProfillePage.getEditProfileHeading().should('have.text',data1.headerText))

 })
        
 And('User update the user profile details',()=>{

    registerPage.enterCityName().type(data1.updateCityName)
    registerPage.enterAddressStreet().type(data1.updateStreetName)
    registerPage.selectOccupation().select(data1.updateOccupation)
 })
 
 And('User click update user button',()=>{

    editProfillePage.clickUpdateUser().click({force:true})
 }) 