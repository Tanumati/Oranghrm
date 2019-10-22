@login
Feature: As a user i should be login in

  Background:
    Given user is on login page


  Scenario Outline: User Should able to login successfully

    When user enter "<Username>"
    And user enter the"<Password>"
    And user click on loginbutton
    Then user should able to login valid credential succefully

    Examples:
      | Username | Password |
      | Admin    | admin123 |
      | mango    | admin123 |
      | Admin    | a3215    |
      | ---      | admin123 |
      | Admin    | ----     |
      | mango    | a12356   |
