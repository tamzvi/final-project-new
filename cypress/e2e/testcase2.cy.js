describe('avtorizaciaq', () => {
  it('passesavtorizacia with correct email and password', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.rprof > p').click()
    cy.get(':nth-child(5) > .imail').type('tamzviadauri@gmail.com')
    cy.get('.ipass').type('123456')
    cy.get('.avtorization > .input-shablon > .form-button').click()
  })
})