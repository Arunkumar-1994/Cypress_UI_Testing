Feature: Update profile details

 Scenario: verify user should be able to update profile details 

        Given User visit the guru99 insurance site and lands on login page
        When User enter valid emailid and password button
        And Click Login button
        And User click edit profile tab
        Then User should view text Editing user profile details
        And User update the user profile details 
        And User click update user button 