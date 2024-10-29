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

    cy.get('input[name="name"]').type('Grace Sitorus');
    // cy.get('input[name="name"]').invoke('prop', 'value').should('contain', 'Grace Sitorus').then(property =>{
    //   expect(property).to.equal('Grace Sitorus')
    // })

    cy.get('input[name="phone"]').type('81234567890');
    // cy.get('input[name="phone"]').invoke('prop', 'value').should('contain', '81234567890').then(property =>{
    //   expect(property).to.equal('81234567890')
    // })

    cy.get('input[name="email"]').type('grace1600ail.com');
    // cy.get('input[name="email"]').invoke('prop', 'value').should('contain', 'grace1600ail.com').then(property =>{
    //   expect(property).to.equal('grace1600ail.com')
    // })

    cy.get('input[name="password"]').type('Password@123');
    // cy.get('input[name="password"]').invoke('prop', 'value').should('contain', 'Password@123').then(property =>{
    //   expect(property).to.equal('Password@123')
    // })

    cy.wait(500); // Adjust the wait time as needed
    cy.get('button[type="button"]').click();


    });
  });
});