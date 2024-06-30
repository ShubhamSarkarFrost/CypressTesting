// cypress -Spec file
/// <reference types="cypress" />


describe('Test Functionality of Rediff Website', function () {
     //     it('Validate whether the User is able to goto rediff webmail', function(){
     //        cy.visit('https://www.rediff.com/');
     //     })
     it('validate headers in rediff website', function () {
          cy.visit('https://www.rediff.com/');
          cy.get('.cell.topicons a').should('have.length', 6).and(($li) => {
               expect($li.get(0).textContent, 'first item').to.equal('Rediffmail');
               expect($li.get(1).textContent, 'second item').to.equal('Money');
               expect($li.get(2).textContent, 'third item').to.equal('Enterprise Email');
               expect($li.get(3).textContent, 'fourth item').to.equal('Shopping');
               expect($li.get(4).textContent, 'fifth item').to.equal('Business Email');
               expect($li.get(5).textContent, 'sixth item').to.equal('rediffGURUS');
          })
     })

     it('verify graph is present when user clicks on money icon', function(){
          cy.visit('https://www.rediff.com/');
          cy.get('.cell.topicons a').eq(0).click();
          cy.wait(8000);
          cy.get('#hm_bse_graph_container').should('be.visible');
     })
})