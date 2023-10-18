describe('REQRES API Testing - Create User', () => {
  it('Create User', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        "name" : "Shabrina",
        "job" : "Quality Assurance"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body).has.property("name", "Shabrina")
    })
  })
});
