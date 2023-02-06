class registerPage {

    selectTitle(){
        return cy.get('#user_title')
    }

    enterFirstName() {
        return cy.get('#user_firstname')
    }

    enterSurName() {
        return cy.get('#user_surname')
    }

    enterPhoneNumber(){
        return cy.get('#user_phone')
    }

    selectYear() {
        return cy.get('#user_dateofbirth_1i')
        //use the select class
    }

    selectMonth() {
        return cy.get('#user_dateofbirth_2i')
        //use the select class
    }

    selectDate() {
        return cy.get('#user_dateofbirth_3i')
        //use the select class
    }

    checkLicenceType() {

        return cy.get('label[for*="licencetype_"]')
        //using first option select full type
        //using last option provisonal 
    }

    selectLicensePeriod(){

        return cy.get('#user_licenceperiod')
    }

    selectOccupation(){

        return cy.get('#user_occupation_id')
    }
    enterAddressStreet() {

        return cy.get('#user_address_attributes_street')
    }

    enterCityName() {
        return cy.get('#user_address_attributes_city')
    }

    enterCountryName() {
        return cy.get('#user_address_attributes_county')
    }

    enterPostCode() {
        return cy.get('#user_address_attributes_postcode')
    }

    enterEmailAddress() {
        return cy.get('#user_user_detail_attributes_email')
    }

    enterPassword() {
        return cy.get('#user_user_detail_attributes_password')
    }

    enterConfirmPassword() {
        return cy.get('#user_user_detail_attributes_password_confirmation')
    }

    clickResetButton() {
        return cy.get('#resetform')
    }
    clickCreateButton() {
        return cy.get('input[name="submit"]')
    }


}
export default registerPage;
