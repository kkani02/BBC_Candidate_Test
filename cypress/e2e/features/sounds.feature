Feature: Sounds Homepage

    As a user  I WANT to navigate to the Sounds page So THAT I can see and access all logos and content in one place

    Background: BBC sounds home page
        Given I am on the BBC sounds Homepage

    Scenario: Radio 1 and Radio 2 logos are displayed in the Listen Live module on the Sounds Homepage
        When I select the Home logo
        Then I am on the Sounds Homepage
        And I can see the Radio 1 & Radio 2 logo
            | logos   |
            | Radio 1 |
            | Radio 2 |

    Scenario: Verify network station logos are displayed on the Stations page
        When I click the View all Stations & Schedules link
        Then I am on the Stations page
        And I see 26 network station logos
            | networkstationlogos  |
            | Radio 1              |
            | Radio 1 Dance        |
            | Radio 1 Relax        |
            | Radio 1Xtra          |
            | Radio 2              |
            | Radio 3              |
            | Radio 4              |
            | Radio 4 LW           |
            | Radio 4 Extra        |
            | Radio 5 Live         |
            | Radio 5 Sports Extra |
            | Radio 6 Music        |
            | Asian Network        |
            | World Service        |
            | Radio Scotland       |
            | Radio Scotland Extra |
            | Radio Orkney         |
            | Radio Shetland       |
            | Radio nan Gàidheal   |
            | Radio Ulster         |
            | Radio Foyle          |
            | Radio Wales          |
            | Radio Wales Extra    |
            | Radio Cymru          |
            | Radio Cymru 2        |
            | CBeebies Radio       |

    Scenario: Selecting the Hip Hop category from the Categories module on the Sounds Homepage
        When I select Hip Hop, RnB & Dancehall Category
        Then I am on Hip Hop, RnB & Dancehall Category page
        And I see the Category page is sorted by popular
        






