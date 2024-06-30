// cypress -Spec file
/// <reference types="cypress" />


describe('Test Functionality of Bigbasket Website', function () {
        it('Validate whether the User is able to goto Bigbasket website', function(){
           cy.visit('https://www.bigbasket.com/');
           cy.title().should('eq', 'Online Grocery Shopping and Online Supermarket in India - bigbasket')
        })
    it('add an item from search menu and validate item is displayed in cart page', function () {
         cy.visit('https://www.bigbasket.com/');
        //  cy.viewport(1920, 1280);
        cy.get('.Header___StyledQuickSearch-sc-19kl9m3-1 > .Backdrop___StyledDiv-sc-1mhwh2y-0 > .relative > .QuickSearch___StyledMenuButton-sc-rtz2vl-1 > .flex-1').click().type("Banana");
         cy.get('.overscroll-contain >li >button').and(($li) => {
            $li.get(0).click();
          });
         cy.get('cursor-pointer mr-3').click(); 
         cy.get('.Header___StyledMotionSpan-sc-19kl9m3-12.fwiste').should('be.visible'); 
         
    })

    // it('verify graph is present when user clicks on money icon', function(){
    //      cy.visit('https://www.rediff.com/');
    //      cy.get('.cell.topicons a').eq(0).click();
    //      cy.wait(8000);
    //      cy.get('#hm_bse_graph_container').should('be.visible');
    // })
})