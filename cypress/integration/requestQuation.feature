Feature: Create a request quation
   
   Scenario: verify user able to create quation  

        Given User visit the guru99 insurance site and lands on login page
        When User enter valid emailid and password button
        And Click Login button
        And User click request button
        And User enter the quoation details 
        And User click the save quoation button
        Then User to navigate the new quotation page

   Scenario: verify user able to calculate premium for request quoation 

        Given User visit the guru99 insurance site and lands on login page
        When User enter valid emailid and password button
        And Click Login button
        And User click request button
        And User enter the quoation details 
        And User click calculate premium button
        Then User should able to view premium amount   

   Scenario: verify user able to reset quotation details  

        Given User visit the guru99 insurance site and lands on login page
        When User enter valid emailid and password button
        And Click Login button
        And User click request button
        And User enter the quoation details 
        And User click reset form button
        Then User should able to view request quoation details        