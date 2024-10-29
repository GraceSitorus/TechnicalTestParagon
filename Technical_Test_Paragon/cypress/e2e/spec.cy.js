/// <reference types="cypress" />

describe('First Test Suite', () => {
  it('Register', () => {
    cy.visit('/');
    cy.get('body').click(0, 0);
    cy.get('#chakra-modal-1').should('not.exist');
    cy.contains('Daftar Jadi Member').click();

    cy.contains('[class="css-0"]', 'Apakah Anda memiliki Kode Referral dari Sponsor?').find('[type="radio"]').then( radioButtons =>{
      cy.wrap(radioButtons).eq(1).check({force: true});
    cy.contains('Lanjut').click();

      cy.get('input[name="name"]').first().as('nameInput'); // or .last() to select the last one
    cy.get('@nameInput').type('Grace Sitorus');


      cy.get('input[name="phone"]').first().as('phoneInput'); // or .last() to select the last one
    cy.get('@phoneInput').type('82272748860');


        cy.get('input[name="email"]').first().as('emailInput'); // or .last() to select the last one
    cy.get('@emailInput').type('email@mail.com');


        cy.get('input[name="password"]').first().as('passwordInput'); // or .last() to select the last one
    cy.get('@passwordInput').type('Password@123');


    cy.get('button[type="button"]').as('submitButton');
    cy.get('@submitButton').first().click();

    cy.get('button[type="button"]').click();

    cy.get('input[name="phone"]').first().as('phoneInput'); // or .last() to select the last one
    cy.get('@phoneInput').type('82272748860');

    cy.get('input[name="password"]').first().as('passwordInput'); // or .last() to select the last one
    cy.get('@passwordInput').type('Password@123');

    cy.get('#page-login__button-login').click();

    });
  });

  it.only('Register', () => {
    cy.visit('/');
    cy.get('body').click(0, 0);
    cy.get('#chakra-modal-1').should('not.exist');
    cy.contains('Daftar Jadi Member').click();

    cy.contains('[class="css-0"]', 'Apakah Anda memiliki Kode Referral dari Sponsor?').find('[type="radio"]').then( radioButtons =>{
      cy.wrap(radioButtons).eq(1).check({force: true});
    cy.contains('Lanjut').click();

    cy.contains('Masuk').click();

    cy.get('input[name="phone"]').first().as('phoneInput'); // or .last() to select the last one
    cy.get('@phoneInput').type('82272748860');

    cy.get('input[name="password"]').first().as('passwordInput'); // or .last() to select the last one
    cy.get('@passwordInput').type('Password@123');

    cy.get('#page-login__button-login').click();

    cy.get('[class="ButtonKeranjangQbee_add-to-cart__H_haT"]', { timeout: 10000 }) // Adjust the selector to match your button
      .should('have.length.greaterThan', 4) // Ensure there are buttons to click
      .then(($buttons) => {
        // Loop through each button using its index
        for (let i = 0; i < 4; i++) {
          cy.wrap($buttons[i]).click({ force: true });
        }
      });

      cy.get('[class="chakra-text flexiComboModal_title__4sbhL css-0"]');
      cy.get('button[type="button"]').click();

    });
  });

});