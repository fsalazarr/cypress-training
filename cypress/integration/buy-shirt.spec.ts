describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/"); // 1. Go to http://automationpractice.com/
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click(); // 2. Go to T-Shirts
    cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click(); // 3. Add to cart first T-Shirt
    cy.get("[style*=\"display: block;\"] .button-container > a").click(); // 4. Click on proceed to checkout on Pop-out
    cy.get(".cart_navigation span").click(); // 5. Click on proceed on the summary step.
    cy.get("#email").type("aperdomobo@gmail.com"); // 6. Write Email
    cy.get("#passwd").type("WorkshopProtractor"); // 7. Write Password
    cy.get("#SubmitLogin").click(); // 8. Click on Sign-In.
    cy.get("button.btn.btn-default.button-medium").click(); // 9. Click on proceed on the address step.
    cy.get("#uniform-cgv").click(); // 10. Accept terms and conditions.
    cy.get("button.btn.btn-default.standard-checkout.button-medium").click(); // 11. Click on proceed on the shipping step.
    cy.get("a.bankwire").click(); // 12. Click on option Pay by bank wire
    cy.get("button.btn.btn-default.button-medium").click(); // 13. Click on confirm order
    cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete."); // 14. Verify
  });
});
