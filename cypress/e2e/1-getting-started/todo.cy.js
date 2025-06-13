/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
   
    cy.visit('/todo')
  })

  it('Should have Increment button', () => {
    
    cy.get('#count_number').should('exist');
    cy.get('#count_number').invoke('text').then((text) => {

      cy.contains('button', 'Increment')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
      
      cy.get('#count_number').should(($counter) => {
        expect(parseInt($counter.text())).to.eq(1);
      });
    })

  });

  it('Should have Decrement button', () => {
    cy.contains('button', 'Decrement')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
    
    cy.get('#count_number').invoke('text').then((text) => {
      cy.get('#count_number').should(($counter) => {
        expect(parseInt($counter.text())).to.eq(-1);
      });
    })
  });
  
})
