class PaymentStepPage {
    private paymentMethod: string;
    private confirmOrderButton: string;
    private output: string;
    private desiredOutput: string

    constructor() {
        this.paymentMethod = 'a.bankwire';
        this.confirmOrderButton = 'button.btn.btn-default.button-medium';
        this.output = '#center_column > div > p > strong';
        this.desiredOutput = 'Your order on My Store is complete.'
    }

    public selectPaymentMethod(): void {
        cy.get(this.paymentMethod).click()
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).click()
    }

    public verifyOutput(): void {
        cy.get(this.output).should("have.text", this.desiredOutput)
    }

}
export { PaymentStepPage }