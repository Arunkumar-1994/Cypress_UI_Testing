Feature: Login function

    Scenario: Verify user is able to view register page

        Given User visit the guru99 insurance site and lands on login page
        When Click register button
        Then User should be navigate to register page
        And User can view the register page

    Scenario: Verify user is able to create a new profile

        Given User visit the guru99 insurance site and lands on login page
        When Click register button
        Then User should be navigate to register page
        And User enter valid details in the register page
        And User click create button
        Then user should be navigate to login page

    Scenario: Verify able to view error message while enter valid mobile number, invalid password

        Given User visit the guru99 insurance site and lands on login page
        When User enter valid emailid and invalid password button
        And Click Login button
        Then User should view error message

    Scenario: Verify able to view error message while enter invalid mobile number, valid password

        Given User visit the guru99 insurance site and lands on login page
        When User enter invalid emailid and  valid password button
        And Click Login button
        Then User should view error message

    Scenario: Verify user succssfully loggedin and view home page, while enter valid emailid and valid password

        Given User visit the guru99 insurance site and lands on login page
        When User enter valid emailid and password button
        And Click Login button
        Then User should navigate to the home page
