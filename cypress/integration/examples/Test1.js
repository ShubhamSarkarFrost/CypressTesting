// cypress -Spec file
describe('Test Functionality of Rediff Website', function () {
     //     it('Validate whether the User is able to goto rediff webmail', function(){
     //        cy.visit('https://www.rediff.com/');
     //     })
     it('validate headers in rediff website', function () {
          cy.visit('https://www.rediff.com/');
          cy.get('.cell.topicons a').should('have.length', 6).and(($li) => {
               expect($li.get(0).textContent, 'first item').to.equal('Rediffmail');
          })
     })
})