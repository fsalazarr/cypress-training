class LoginPage {
    private email: string;
    private password: string;
    private emailLocation: string;
    private passwordLocation: string;
    private signInLocation: string;

    constructor() {
        this.email = 'aperdomobo@gmail.com';
        this.password = 'WorkshopProtractor';
        this.emailLocation = '#email';
        this.passwordLocation = '#passwd';
        this.signInLocation = '#SubmitLogin'
    }

    public writeEmail(): void {
        cy.get(this.emailLocation).type(this.email)
    }

    public writePassword(): void {
        cy.get(this.passwordLocation).type(this.password)
    }

    public signIn(): void {
        cy.get(this.signInLocation).click()
    }

}
export { LoginPage }