Feature: Todo list
  As a user
  I want to add message in the chat
  In order to chat with someone

  Scenario:
    Given I am in the chat page
    When I wrote "toto" in the chat input
    And I click on the send button
    Then A "toto" message is printed

  Scenario:
    Given I open two chat window
    When I wrote "tata" in the chat input in the first window
    And I click on the send button in the first window
    Then A "tata" message is printed in the second window