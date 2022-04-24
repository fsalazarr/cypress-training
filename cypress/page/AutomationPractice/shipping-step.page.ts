class ShippingStepPage {
    private checkboxTC: string;
    private shippingCheckout: string

    constructor() {
        this.checkboxTC = '#uniform-cgv';
        this.shippingCheckout = 'button.btn.btn-default.standard-checkout.button-medium'
    }

    public agreeTC(): void {
        cy.get(this.checkboxTC).click()
    }

    public proceedShippingCheckout(): void {
        cy.get(this.shippingCheckout).click()
    }

}
export { ShippingStepPage }