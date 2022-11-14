const URL ='https://www.bbc.co.uk/sounds'
const URL1 ='https://www.bbc.co.uk/sounds/music'
class bbcHomePage{
    static visitSoundsPage(){
        cy.visit(URL)
    }
    static visitMusicPage(){
        cy.visit(URL1)
    }
}
export default bbcHomePage