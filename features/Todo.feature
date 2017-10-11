Feature: Todo list
  As a user
  I want to add toto in the list
  In order to manage my todos

  Scenario:
    When I click on Add Todo Button
    And I wrote "cook" on the input
    Then The todo "cook" is created
