class ProductListPage {
    private tShirt: string;
    private popupCheckOut: string
    

    constructor() {
        this.tShirt = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default';
        this.popupCheckOut = '[style*=\"display: block;\"] .button-container > a'        
    }

    public proceedPopoutCheckOut(): void {
        cy.get(this.popupCheckOut).click()
    }

    public addTShirt(): void {
        cy.get(this.tShirt).click()
    }

}
export { ProductListPage }