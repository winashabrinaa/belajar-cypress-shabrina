describe('REQRES API Testing - Get Users List', () => {
  it('Get list user', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
});
