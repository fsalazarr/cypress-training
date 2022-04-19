class PaymentStepPage {
    private paymentMethod: string;
    private confirmOrderButton: string;
    private output: string;

    constructor() {
        this.paymentMethod = 'a.bankwire';
        this.confirmOrderButton = 'button.btn.btn-default.button-medium';
        this.output = '#center_column > div > p > strong';
    }

    public selectPaymentMethod(): void {
        cy.get(this.paymentMethod).click()
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).click()
    }

    public verifyOutput(desiredOutput: string): void {
        cy.get(this.output).should("have.text", desiredOutput)
    }

}
export { PaymentStepPage }