import {homePage} from "../POM/homePage/homePage.js";

describe('Search Results Page', () => {
    it('Single Valid Search Result', () => {
        const movieTitle = "Pirates of the Caribbean: On Stranger Tides";
        cy.visit('https://www.themoviedb.org');
        homePage.searchMovie(movieTitle);
        cy.get('div.title h2').should('contain', movieTitle);
    });

    it('No Results', () => {
        const movieTitle = "dfaereagtr";
        cy.visit('https://www.themoviedb.org');
        homePage.searchMovie(movieTitle);
        cy.get('div.title h2').should('not.exist');
    });
});
