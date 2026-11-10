Feature: Login Functioanlity


  Scenario Outline: Valid Creds

        Given I navigate to the url
        When I enter valid username "<email>" and valid password "<password>"
        And clicks on the login button
        Then I should be logged in to the portal successfully

        Examples:
        | email                           | password       |
        | suhasbhagat4523434@yopmail.com  | Suhas@12345    |
        | suhas1234@yopmail.com           | Suhas@123      |