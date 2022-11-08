

describe('HomePage', () => {

  it('Tela carregou', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Request API Get',()=>{
    cy.request('https://api.spaceflightnewsapi.net/v3/articles?_limit=10').then(response =>{
      if(response.status == 200)
      cy.get('div').find('div[class*=cards]').its('length').should('be.gte', 10)
    })
  })
  it('Ordernar mais antigas',()=>{
    cy.get('a[class*=dropdown]').type('Ordernar')
    cy.get('a[id*=Old]').click()
  })
  it('Ordernar mais novas',()=>{
    cy.get('a[class*=dropdown-toggle]').click()
    cy.get('a[id*=New]').click()
  })
  it('Filter',()=>{
    cy.get('input[type*="search"]').click()
    cy.get('input[type*="search"]').type('Space')
    cy.get('div').find('div[class*=cards]').its('length').should('be.gte', 1)
    cy.get('input[type*="search"]').clear()
    cy.get('div').find('div[class*=cards]').its('length').should('be.gte', 10)
  })
  it('Request API Get +10',()=>{
    cy.get('button[id*=LoadingMore]').click()
    cy.request('https://api.spaceflightnewsapi.net/v3/articles?_limit=20').then(response =>{
      if(response.status == 200)
      cy.get('div').find('div[class*=cards]').its('length').should('be.gte', 20)
    })
  })
  it('OpenModal',()=>{
    cy.get('button[id*=CardButton0]').click()
    cy.get('div').find('div[class*=modal-body]').its('length').should('be.gte', 1)
  })
})