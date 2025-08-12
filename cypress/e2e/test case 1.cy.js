describe('testzootopia registration', () => {
  it('passeregistration with correct data', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.menu-pop > .rprof')
    cy.get('.input-shablon > p > a')
     cy.get('.rprof > p').click()
    cy.get('.input-shablon > p > a').click()
     cy.get(':nth-child(1) > .ismile').type('tamari')
     cy.get(':nth-child(2) > .imail').type('tamzviadauri@gmail.com')
     cy.get('.ipir').type('23001011979')
     cy.get(':nth-child(4) > .itel').type('5143762226')
     cy.get(':nth-child(5) > .ipass').type('123456')
     cy.get('.reg-form-left > :nth-child(6) > .ipass').type('123456')
     cy.get('.etx > p').click()
     cy.get('.regsub').click()
     
  })
})