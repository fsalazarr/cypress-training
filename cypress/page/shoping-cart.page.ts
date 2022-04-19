class ShoppingCartPage {
    private summaryCheckOut: string

    constructor() {
        this.summaryCheckOut = '.cart_navigation span'
    }

    public proceedSummaryCheckOut(): void {
        cy.get(this.summaryCheckOut).click()
    }

}
export { ShoppingCartPage }