/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/homePage';
import LoginPage from '../../support/pageObjects/loginPage';
import RequestQuationPage from '../../support/pageObjects/requestQuationPage';
import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';
import RetrieveQuationPage from '../../support/pageObjects/retrieveQuationPage';

const requestQuationPage = new RequestQuationPage();
const loginPage = new LoginPage();
const homePage = new HomePage();
const retrieveQuationPage=new RetrieveQuationPage();

let data = {};
let data1={};

beforeEach(() => {
   cy.visit(Cypress.env('guru99nsurance'))
   cy.fixture('insuranceData').then(function (jsonData) {
       data = jsonData
   })
   cy.fixture('requestQuotionData').then(function (jsonData) {
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

And('User enter the quation details',()=>{

   cy.waitUntil(()=>requestQuationPage.getQuationext().should('have.text',data1.requestText))
   cy.waitUntil(()=>requestQuationPage.selectQuoationBreakDownCover().select())
   cy.waitUntil(()=>requestQuationPage.selectWindScreenRepair().first().click())
   cy.waitUntil(()=>requestQuationPage.enterIncidents().type(data1.enterIncidents))
   cy.waitUntil(()=>requestQuationPage.enterVechicleRegistration().type(data1.enterVechicleRegistration))
   cy.waitUntil(()=>requestQuationPage.enterEstimatedValue().type(data1.enterEstimatedValue))
   cy.waitUntil(()=>requestQuationPage.enterAnnualMileage().type(data1.enterAnnualMileage))
   cy.waitUntil(()=>requestQuationPage.selectParkingLocation().select(data1.selectParkingLocation))
   cy.waitUntil(()=>requestQuationPage.selectYearStateOfPolicy().select(data1.selectYearStateOfPolicy))
   cy.waitUntil(()=>requestQuationPage.selectMonthStateOfPolicy().select(data1.selectMonthStateOfPolicy))
   cy.waitUntil(()=>requestQuationPage.selectDateStateOfPolicy().select(data1.selectDateStateOfPolicy))

}) 

And('User click the save quoation button',()=>{

   cy.waitUntil(()=>requestQuationPage.clickSaveQuoation().should('be.enabled').click()) 
})

Then('User to navigate the new quotation page',()=>{

   cy.url().should('includes','new_quotation.php')
   cy.go('back')
}) 

And('User click retrieve button',()=>{
   cy.waitUntil(()=>homePage.clickRetriveQuoation().click())

})

And('User enter identification number',()=>{
cy.waitUntil(()=>retrieveQuationPage.enterIdentifactionNum().type('21313'))

})

When('Click on retrieve button',()=>{
   cy.waitUntil(()=>retrieveQuationPage.clikRetrieveButton().click({force:true}))

})

Then('User can view the quoation details',()=>{


})
