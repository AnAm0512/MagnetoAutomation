///<reference types="Cypress"/>
describe('Test Suite ', () => {
  it('1- Visit Link ', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  it('2- Sign-in  ', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
  })
})