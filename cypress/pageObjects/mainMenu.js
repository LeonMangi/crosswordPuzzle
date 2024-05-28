class MainMenu {
  // elements
  constructor(){
    this.elements = {
      crosswordStart: () => cy.get('.mvlKG03PAKK8byHIw-4SZ')
  }
}  
  

  // Actions
  startGame(){
    cy.wait(7000)
    this.elements.crosswordStart().click()
  }


}

export default MainMenu;
