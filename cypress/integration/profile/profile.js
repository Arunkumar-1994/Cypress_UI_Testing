/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/homePage';
import LoginPage from '../../support/pageObjects/loginPage';
import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';
import ProfilePage from '../../support/pageObjects/profilePage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const profilePage =new ProfilePage();

let data = {};

beforeEach(() => {
    cy.visit(Cypress.env('guru99nsurance'))
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
 
 And('User click profile tap',()=>{
    
    cy.waitUntil(()=>homePage.clickProfile().click())
 })
 
Then('User can view profile details',()=>{

    cy.waitUntil(() => profilePage.getProfileTitle().should('be.visible'))
    })
