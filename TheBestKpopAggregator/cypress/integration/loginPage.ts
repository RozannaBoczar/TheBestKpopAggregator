describe('Login Page', () => {

    beforeEach(()=>{
      cy.visit('/');
    });
  
    it('has login and register signs', () => {
      cy.title().should('equal', 'TheBestKpopAggregator');
      cy.get('[id="login-text"').should('have.text', 'Click to log in!');
      cy.get('[id="register-text"').should('have.text', 'Click to sign up!');
    });

    it('can log in and log out', () => {
        cy.get('input[id="emailInput"').type('rozia@test.com');
        cy.get('input[id="passwordInput"').type('woofwoof');
        cy.get('button[id="login-button"]').first().click();
        cy.url().should('include', 'user-page/choose-groups');
        cy.wait(5000);
        cy.get('a[href="#"]').first().click();
        cy.url().should('include', '/login-page') ;
      });

      it('verify alert if wrong email', () => {
        cy.get('input[id="emailInput"').type('xxx@test.com');
        cy.get('input[id="passwordInput"').type('woofwoof');
        cy.get('button[id="login-button"]').first().click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Wrong email or password!`)
          })
      });

      it('verify alert if wrong password', () => {
        cy.get('input[id="emailInput"').type('rozia@test.com');
        cy.get('input[id="passwordInput"').type('eh');
        cy.get('button[id="login-button"]').first().click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Wrong email or password!`)
          })
      });

    

  })
  