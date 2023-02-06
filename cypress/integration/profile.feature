Feature: View user profile details

 Scenario: verify user should be able to view profile details 

        Given User visit the guru99 insurance site and lands on login page
        When User enter valid emailid and password button
        And Click Login button
        And User click profile tap
        Then User can view profile details
