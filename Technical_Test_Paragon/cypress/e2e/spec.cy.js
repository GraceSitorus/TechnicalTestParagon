describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/')

    cy.contains('x').click()
    cy.contains('Daftar Jadi Member').click()
  })
})