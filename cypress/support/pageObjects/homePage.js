class homePage{

getUserEmail(){

    return cy.get('div.content>h4')
}

getBrokerInsuranceText(){
    return cy.get('#tabs-1 >h2')
  
    //Broker Insurance WebPage is visibel
}

clickNewContent(){

    return cy.get('#newquote')
}

clickRetriveQuoation(){

    return cy.get('#retrieve')
}

enterIdentifactionNum(){

    return cy.get('input[placeholder="identification number"]')
}

clikRetrieveButton(){

    return cy.get('[id="getquote"]')
}

clickProfile(){

    return cy.get('#profile')
}

clickEditProfile(){

    return cy.get('#editprofile')

}

clickLoginButton(){

    return cy.get('[value="Log out"]')
}

clickLogOutButton(){

    return cy.get('input[value="Log out"]')
}
}
export default homePage;
