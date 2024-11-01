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

    cy.get('[class="css-0"]');

    cy.get('[class="chakra-button css-nzwdbq"]', { timeout: 10000 }) // Adjust the selector to match your button
      .should('have.length.greaterThan', 4) // Ensure there are buttons to click
      .then(($buttons) => {
        for (let i = 0; i < 5; i++) {
          cy.wrap($buttons[i]).click({ force: true });
        }
      });

      cy.get('[class="chakra-button css-b74w8"]', { timeout: 10000 }) // Adjust the selector to match your button
      .should('have.length.greaterThan', 4) // Ensure there are buttons to click
      .then(($buttons) => {
        for (let i = 0; i < 2; i++) {
          cy.wrap($buttons[i]).click({ force: true });
        }
      });

    cy.wait(10000);
    cy.get('body').click(0, 0);
    cy.get('#chakra-modal-1').should('not.exist');

    
    cy.get('[class="HeaderQbee_total-cart__Acy0A"]').click();
    cy.get('[class="chakra-button styles_cookies-button__mJJow css-izbdsk"]').click();
    cy.get('[class="chakra-button css-1pilj7v"]').click();
    cy.get('[class="css-70qvj9"]');
    cy.get('[class="pickDelivery_pickDelivery-upper__gRRQ_"]').click();
    cy.get('header[class="chakra-modal__header pickDelivery_modal-header__zFWlk css-9fgtzh"]');
    
    cy.get('[class="chakra-modal__body pickDelivery_modal-body__PT2dA css-qlig70"]').find('[type="radio"]').then( radioButtons =>{
      cy.wrap(radioButtons).eq(1).check({force: true});
    });

    cy.get('header[class="chakra-modal__header pickCourier_modal-header__P3hOV css-9fgtzh"]');

    cy.get('[class="pickCourier_title-content__dZgUS css-0"]').find('[type="radio"]').then( radioButtons =>{
      cy.wrap(radioButtons).eq(0).check({force: true});

    });

    cy.get('[class="chakra-button checkoutSummary_checkout-btn__eCqC8 css-1kmr4oq"]').click();
    });
  });

});