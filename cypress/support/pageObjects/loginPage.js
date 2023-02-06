class loginPage {

    clickRegisterButton() {
        return cy.get('div.content>a')
    }

    getLogincontentText() {
        return cy.get('div.content>h3')
    }

    clickEmailBox(){
        return cy.get('#email')
    }

    clickPasswordBox() {
        return cy.get('#password')
    }

    clickLogin() {
        return cy.get('input[name="submit"]')
    }

    getErrorMessage(){

        return cy.get('form>:nth-child(2)>span>b')
    }

}

export default loginPage;
