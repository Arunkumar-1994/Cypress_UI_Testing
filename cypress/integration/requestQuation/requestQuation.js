/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/homePage';
import LoginPage from '../../support/pageObjects/loginPage';
import RequestQuationPage from '../../support/pageObjects/requestQuationPage';
import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';
import RetrieveQuationPage from '../../support/pageObjects/retrieveQuationPage';
import { makeRandomString } from '../../support/generic-library/commanGenericFunction'


const requestQuationPage = new RequestQuationPage();
const loginPage = new LoginPage();
const homePage = new HomePage();
const retrieveQuationPage=new RetrieveQuationPage();

let data = {};
let data1={};
let vechicleNumber =makeRandomString(4)

beforeEach(() => {
   cy.visit(Cypress.env('guru99nsurance'))
   cy.fixture('loginData').then(function (jsonData) {
       data = jsonData
   })
   cy.fixture('requestQuotationData').then(function (jsonData) {
      data1 = jsonData
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

And('User click request button',()=>{
   
   cy.waitUntil(()=>homePage.clickNewContent().click())
})

And('User enter the quoation details',(requestText,enterIncidents,enterVechicleRegistration,enterEstimatedValue,enterAnnualMileage,selectParkingLocation,selectYearStateOfPolicy,selectMonthStateOfPolicy,selectDateStateOfPolicy)=>{
    
   var vechNum=data1.enterVechicleRegistration+vechicleNumber

   cy.createRequestQuotation(data1.requestText,data1.enterIncidents,vechNum,data1.enterEstimatedValue,data1.enterAnnualMileage,data1.selectParkingLocation,data1.selectYearStateOfPolicy,data1.selectMonthStateOfPolicy,data1.selectDateStateOfPolicy)
}) 

And('User click the save quoation button',()=>{

   cy.waitUntil(()=>requestQuationPage.clickSaveQuoation().should('be.enabled').click()) 
})

Then('User to navigate the new quotation page',()=>{

   cy.url().should('includes',data1.newQuoationIncludes)
   cy.go('back')
}) 

/**
 * 
 * verify user able to calculate premium
 */

And 
('User click calculate premium button',()=>{

   cy.waitUntil(()=>requestQuationPage.clickCalculatePremiumButton().should('be.enabled').click())
})

Then('User should able to view premium amount',()=>{

   cy.waitUntil(()=>requestQuationPage.getPremiumAmount().should('be.visible'))
})

 /**
  * 
  * verify user able to reset quotation details
  * 
  */

 And('User click reset form button',()=>{
 
   cy.waitUntil(()=>requestQuationPage.clickResetForm().should('be.enabled').click())
 })
   
 Then('User should able to view request quoation details',()=>{

   cy.waitUntil(()=>requestQuationPage.enterIncidents().should('have.attr','name','incidents'))
 }) 