/// <reference types="Cypress" />
describe('tasks page',()=>{
  it('should render the main image',()=>{
    cy.visit('http://127.0.0.1:5173/');
    cy.get('.main-header').find('img');
  });
  it('should be displayed the page title',()=>{
    cy.visit('http://127.0.0.1:5173/');
    cy.get('h1').contains('My Cypress Course Tasks');
  });
  
});