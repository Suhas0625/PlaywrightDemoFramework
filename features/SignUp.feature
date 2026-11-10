Feature: User registration 
    Scenario: Navigate to signup page
        Given I navigate to the url
        When I clicks on the register button
        Then I should be able fill the registation deatils
        And Registation should be successful