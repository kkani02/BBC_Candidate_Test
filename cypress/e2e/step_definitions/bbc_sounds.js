import {
    Given,
    When,
    And,
    Then,
    DataTable
} from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";

//BBC Sounds HomePage
Given("I am on the BBC sounds Homepage", () => {
    homePage.visitSoundsPage()
    cy.title().should('eq', 'BBC Sounds - Music. Radio. Podcasts')
    cy.get('#bbccookies-continue-button').click()
})

//Validating Radio 1 and Radio 2 Logo
When("I select the Home logo", () => {
    cy.get('span').contains('Sounds home page').click({ force: true })
})

Then("I am on the Sounds Homepage", () => {
    cy.get('span').contains('Sounds home page')

})

Then("I can see the Radio 1 & Radio 2 logo", (DataTable) => {
    DataTable.hashes().forEach(row => {
        cy.log(row.logos)
        cy.get('div').contains(row.logos)
    })
})

//Validating Stations logos
When("I click the View all Stations & Schedules link", () => {
    cy.get('span').contains('View all Stations & Schedules').click()
})

Then("I am on the Stations page", () => {
    cy.get('#sw-id-national_stations').should('have.text', 'Stations')

})

Then("I see 26 network station logos", (DataTable) => {
    DataTable.hashes().forEach(row => {
        cy.log(row.networkstationlogos)
        cy.get('span[class="gs-u-display-block sc-o-link__text gel-great-primer-bold sc-u-truncate gs-u-mb-"]').contains(row.networkstationlogos)
    })
})

//Validating Category module
When("I select Hip Hop, RnB & Dancehall Category", () => {
    cy.get('div').contains('Hip Hop, RnB & Dancehall').click()
})

Then("I am on Hip Hop, RnB & Dancehall Category page", () => {
    cy.get('#sc-id-all-hip-hop-rn-b-dancehall').should('have.text', 'All Hip Hop, RnB & Dancehall')
})

Then("I see the Category page is sorted by popular", () => {
    cy.get('#sc-id-hip-hop').should('have.text','Hip Hop')
    cy.get('#sc-id-all-hip-hop-rn-b-dancehall').should('have.text','All Hip Hop, RnB & Dancehall')
  
})

