class AddressStepPage {
    private addressCheckout: string

    constructor() {
        this.addressCheckout = 'button.btn.btn-default.button-medium'
    }

    public proceedAddressCheckout(): void {
        cy.get(this.addressCheckout).click()
    }

}
export { AddressStepPage }