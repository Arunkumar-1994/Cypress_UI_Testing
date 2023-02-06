Feature: Create a request quation
   
   Scenario: verify user able to create quation  

        Given User visit the guru99 insurance site and lands on login page
        When User enter valid emailid and password button
        And Click Login button
        And User click request button
        And User enter the quation details 
        And User click the save quoation button
        Then User to navigate the new quotation page
        And User click retrieve button 
        And User enter identification number
        When Click on retrieve button
        Then User can view the quoation detail