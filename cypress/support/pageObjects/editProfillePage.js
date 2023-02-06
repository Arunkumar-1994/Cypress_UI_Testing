class editProfilePage{

    clickUpdateUser(){

        return cy.get('input[name="commit"]')
    }
    
    getEditProfileHeading(){

        return cy.get('div#tabs-5 >h1')
       //Editing user profile
    }
    
    

}
export default editProfilePage;