class retrieveQuationPage{

    getRetrieveHeading(){

     return cy.get('body>b>font')
    //Retrieve Quotation     
    }

    getNumberOfRows(){
   
       return cy.get('table[border="1"]>tbody>tr')
       //no fo rows 10 
    }

    getColumnValue(){

        return cy.get('table[border="1"]>tbody>tr>td:nth-child(2)')
        //no of column 10 nos 
    }
      
}
export default retrieveQuationPage;