Feature: Add a new student to a class
  As a teacher
  I want to add an existing student to my class
  In order to follow him


  Scenario: 3 students whose name begins with the input are displayed
    Given I want to display the list of student whose name start with "ben"
    And there is 3 students whose name begins with "ben"
    When I wrote "ben" in the input
    Then a list of 3 students whose names begin with "ben" is displayed



  Scenario: 1 student whose name begins with the input is displayed
    Given I want to display the list of student whose name start with "ben"
    And there is only one student whose name begins with "ben"
    When I wrote "ben" in the input
    Then a list which content only one student whose name begin with "ben" is displayed



  Scenario : display list of student to add failed - empty list 
    Given the class CM1 exist
    And I want to add a student name "Nadia Ahassouni" to this class
    And this student is nonexistent
    When I wrote "Nadia Ahassouni" in the input
    Then no student list is displayed


  Scenario : display list of student to add failed - nonexistent student
    Given the class CM1 exist
    And I want to add a student name "Nadia Ahassouni" to this class
    And this student is nonexistent
    When I wrote "Nadia" in the input
    Then other student named "nadia" are displayed in the list but not "Nadia ahassouni"



  Scenario Outline: add an existing student in an existing class success
    Given the class <className> exist
    And I want to add a student name <studentName> to this class
    When I wrote the starting of the student name in the input
    And I choose the <studentName> in the list of student 
    And I click the button submit
    Then student is added to the class
    And Im redirected to home page

    Examples: 
      | className | studentName     | 
      | CM1       | Nadia Ahassouni |
      | CM2       | Louis Nesqwik   |
      | CM1       | Helene Mayer    |



  Scenario : add a student in an existing class cancel 
    Given the class <className> exist
    And I want to add a student named <studentName> to this class
    When I wrote the begging of the student name in the input
    And I choose the <studentName> in the list of student 
    And I click the cancel submit
    Then the pop-up is hidden
    And the student is not added to the class



  Scenario : add a student with empty input error
    Given the class CM1 exist
    And I want to add a student named "Pierre-Claver"to this class
    When I let the input empty
    And I click the button submit
    Then a message error is displaying
    And no student is added to the class


  Scenario : add a student name with invalid character got an error
    Given the class <className> exist
    And I want to add a student named "Helene Mayer" to this class
    When I wrote "@helene"
    And I click the button submit
    Then a message error is displaying
    And no student is added to the class



