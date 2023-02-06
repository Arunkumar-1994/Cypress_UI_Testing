class requestQuationPage{

    getQuationext(){

        return cy.get('#tabs-2>h2')
       //Request a quotation is a text 
    }
   
    selectQuoationBreakDownCover(){

        return cy.get('select#quotation_breakdowncover')
    } 
    
    selectWindScreenRepair(){

         return cy.get('input[id*="quotation_windscreenrepair_"]')
      //first is yes 
      //last is no
    }

    enterIncidents(){

        return cy.get('input#quotation_incidents')
    }

    enterVechicleRegistration(){

        return cy.get('#quotation_vehicle_attributes_registration')
    }

    enterAnnualMileage(){

        return cy.get('#quotation_vehicle_attributes_mileage')
    }

    enterEstimatedValue(){

        return cy.get('input#quotation_vehicle_attributes_value')
    }

    selectParkingLocation(){

        return cy.get('#quotation_vehicle_attributes_parkinglocation')
        //using select class
        //Public place,Garage,Driveway,Private property
    }

    selectYearStateOfPolicy(){

        return cy.get('#quotation_vehicle_attributes_policystart_1i')
        //select year //2022
    }

    selectMonthStateOfPolicy(){

        return cy.get('#quotation_vehicle_attributes_policystart_2i')
        //select month //1,2,3,4,5,6,7,8
    }

    selectDateStateOfPolicy(){

        return cy.get('#quotation_vehicle_attributes_policystart_3i')
        //select date //1,2,3,4-31
    }
    
    clickCalculatePremiumButton(){

        return cy.get('input[value="Calculate Premium"]')
    }

    clickResetForm(){

        return cy.get('#resetquote')
    }
   
    clickSaveQuoation(){

        return cy.get('input[value="Save Quotation"]')
    }

    getIdentificationNumber(){

        return cy.get('body')
    }

    }
export default requestQuationPage;