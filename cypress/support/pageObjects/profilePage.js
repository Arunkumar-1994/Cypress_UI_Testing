class profilePage{

    getProfileTitle(){

        return cy.get('div#tabs-4')
    }
    
    getProfileTitle2(){

        return cy.get('div#tabs-4 >p[id]')
    }

}
export default profilePage;