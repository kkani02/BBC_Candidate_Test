Feature: Sounds web music page

    As a user i want to navigate to the sounds web music page from sounds homepage to use all the contants in one place

    Background: BBC sounds home page
        Given I am on the BBC Sounds Web Music Homepage

    Scenario: Verify music page Back To Back Sounds and Music Categories are displayed
        When I select music menu
        Then I am on the sounds web music page
        And I can see the Music Back To Back Sounds and Music Categories on that page

    Scenario: Search an music on the search icon bar
        When I do search for particular music
            | searchoption |
            | night music  |
            | soul music   |
        Then I should get relevant products as results and validate the message "Showing search results for"
        And I validate the Shows and Episodes category


    Scenario: Selecting the Fresh New Music link from the Match Your Mood category on the music home page
        When I select Fresh New Music link
        Then I am on the Fresh New Music category page
        And I see the page listed by Fresh New Music category has Asian Network Fresh icon

    Scenario: Selecting the The Sleeping Forecast from Music Mixes
        When I select The Sleeping Forecast
        Then I am on the The Sleeping Forecast page
        And I can see all The Sleeping Forecast music link and validate Tracklist and Coming up Next title

