Feature: Todo list
  As a user
  I want to add toto in the list
  In order to manage my todos

  Scenario:
    Given I have no todo
    And I wrote "cook" on the input
    When I click on Add Todo Button
    Then The todo "cook" is created
