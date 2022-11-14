import {
    Given,
    When,
    Then,
    And
}
    from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";

//BBC Sound’s web music page 
Given('I am on the BBC Sounds Web Music Homepage', () => {
    homePage.visitMusicPage()
    cy.title().should('eq', 'BBC Sounds - Music')
    cy.get('#bbccookies-continue-button').click()
})

//Validating Back To Back Sounds and Music Categories
When('I select music menu', () => {
    cy.get('span').contains('Music').click()
})

Then('I am on the sounds web music page', () => {
    cy.title().should('eq', 'BBC Sounds - Music')
})

Then('I can see the Music Back To Back Sounds and Music Categories on that page', () => {
    cy.get('#sc-id-back-to-back-sounds').should('have.text', 'Back To Back Sounds')
    cy.get('#sc-id-music-categories').should('have.text', 'Music Categories')

})

//Validating Search Icon bar
When('I do search for particular music', (DataTable) => {
    DataTable.hashes().forEach(row => {
        cy.log(row.searchoption)
        cy.get('span').contains('Search Sounds').click({ force: true })
        cy.get('#se-searchbox-input-field').type(row.searchoption)
        cy.get('button[type="submit"]').click()
    });
})

Then('I should get relevant products as results and validate the message {string}', (message) => {
    cy.get('span').contains(message)
})

Then('I validate the Shows and Episodes category', () => {
    cy.get('#sc-id-shows').contains('Shows')
    cy.get('#sc-id-episodes').contains('Episodes')
})

//Selecting the Fresh New Music link
When('I select Fresh New Music link', () => {
    cy.get('div').contains('Fresh New Music').click({ force: true })

})

Then('I am on the Fresh New Music category page', () => {
    cy.get('h2[class="sc-c-module-title__text gel-trafalgar-bold gs-u-display-inline-block gs-u-align-top gel-1/1"]').should('have.text', 'Fresh New Music')
})

Then('I see the page listed by Fresh New Music category has Asian Network Fresh icon', () => {
    cy.get('span').contains('Asian Network Fresh')

})

//Selecting the The Sleeping Forecast
When('I select The Sleeping Forecast', () => {
    cy.get('span').contains('The Sleeping Forecast').click()
})

Then('I am on the The Sleeping Forecast page', () => {
    cy.get('#sc-id-the-sleeping-forecast').should('have.text', 'The Sleeping Forecast')
})

Then('I can see all The Sleeping Forecast music link and validate Tracklist and Coming up Next title', () => {
    cy.get('#sc-id-tracklist').should('have.text', 'Tracklist')
    cy.get('#sc-id-coming-up-next').should('have.text', 'Coming Up Next')
})



