describe('User Page', () => {

    before(()=>{
      cy.visit('/');
      cy.get('input[id="emailInput"').type('rozia@test.com');
      cy.get('input[id="passwordInput"').type('woofwoof');
      cy.get('button[id="login-button"]').first().click();
      cy.url().should('include', 'user-page/choose-groups');
    });
  
    it('default band and social media is selected', () => {
        cy.get('h2[id="bandSociaInfo"').should('have.text', 'BTS FACEBOOK');
        
      });

    afterEach(()=>
    {
        cy.wait(2000);
    });

    it('select another groups', () => {
    cy.get('ng-select[id="selectGroup"]').type('Black Pink');
    cy.wait(2000);
    cy.get('ng-select[id="selectGroup"]').then((selects) => {
        let select = selects[0]; // we want just first one
        cy.wrap(select) // allows us to click using cypress
           .click() // click on the first ng-select
           .get("ng-dropdown-panel") // get the opened drop-down panel
           .get(".ng-option") // Get all the options in drop-down
           .contains("Black Pink") // Filter for just this text
           .then((item) => {
              cy.wrap(item).click(); // Click on the option
           })});

    cy.get('h2[id="bandSociaInfo"').should('have.text', 'BLACK PINK FACEBOOK');
    
    cy.wait(2000);
    cy.get('ng-select[id="selectGroup"]').type('Stray kids');
    cy.wait(2000);
    cy.get('ng-select[id="selectGroup"]').then((selects) => {
        let select = selects[0]; // we want just first one
        cy.wrap(select) // allows us to click using cypress
           .click() // click on the first ng-select
           .get("ng-dropdown-panel") // get the opened drop-down panel
           .get(".ng-option") // Get all the options in drop-down
           .contains("Stray Kids") // Filter for just this text
           .then((item) => {
              cy.wrap(item).click(); // Click on the option
           })});
    cy.get('h2[id="bandSociaInfo"').should('have.text', 'STRAY KIDS FACEBOOK');

    });

    it('select other social media', () => {
        cy.get('div[id="twitter"]').click();
        cy.get('h2[id="bandSociaInfo"').should('have.text', 'STRAY KIDS TWITTER');
        cy.wait(2000);
        cy.get('div[id="insta"]').click();
        cy.get('h2[id="bandSociaInfo"').should('have.text', 'STRAY KIDS INSTAGRAM');
        cy.wait(2000);
        cy.get('div[id="fb"]').click();
        cy.get('h2[id="bandSociaInfo"').should('have.text', 'STRAY KIDS FACEBOOK');
        });

    it('select other tab', () => {
        cy.get('a[href="/user-page/manage-groups"]').click();
        cy.wait(2000);
        cy.url().should('include', '/user-page/manage-groups');
        cy.get('p').should("have.text", " Sorry...this page is unavailable... ")

        });

    it('log out', () => {
        cy.get('a[href="#"]').click();
        cy.url().should('include', '/login-page');
        
        });

    

  })
  