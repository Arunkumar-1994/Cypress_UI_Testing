Feature: User view retrieve quotation table

 Scenario: verify user should be able to view retrieve quotation table 

        Given User visit the guru99 insurance site and lands on login page
        When User enter valid emailid and password button
        And Click Login button
        And User click retrieve quotation tap
        Then User should be able to view retrieve quotation heading
        And User should able to view retrieve quotation table 