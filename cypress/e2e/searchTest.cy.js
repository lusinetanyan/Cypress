import {homePage} from "../POM/homePage/homePage.js";

describe('Search Results Page', () => {
    beforeEach(() => {
        cy.visit('https://www.themoviedb.org');
    })

    it('Single Valid Search Result', () => {
        const movieTitle = "Pirates of the Caribbean: On Stranger Tides";
        homePage.searchMovie(movieTitle);
        cy.get('div.title h2').should('contain', movieTitle);
    });

    it('No Results', () => {
        const movieTitle = "dfaereagtr";
        homePage.searchMovie(movieTitle);
        cy.get('div.title h2').should('not.exist');
    });
});
