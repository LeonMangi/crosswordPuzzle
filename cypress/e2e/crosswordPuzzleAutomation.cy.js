import MainMenu from "../pageObjects/mainMenu";

describe('Crossword Puzzle Automtion', () => {
  const mainMenu = new MainMenu();

  beforeEach(() => {
    cy.visit('https://www.gamelab.com/games/daily-quick-crossword');
  });

  describe('1.2 Game Main Menu', () => {
    it('Verify that User is able to Play Game', () => {
      cy.intercept('GET', '/games/daily-quick-crossword', (req) => {
        req.reply((res) => {
          console.log(res.body);
        });
      }).as('getGameData');
  
      cy.visit('https://www.gamelab.com/games/daily-quick-crossword');
  
      // Wait for the request to be made and intercepted
      cy.wait('@getGameData');
  
      // Additional assertions or actions can be performed here
      cy.getIframeBody('.aut-iframe')
      .find('[data-testid="calendarCard"]')
      .should('be.visible');
    });
  });
});