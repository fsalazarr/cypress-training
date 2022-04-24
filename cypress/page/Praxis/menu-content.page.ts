class MenuContentPage {
    private addProductButton: string;
    private menuContentPageURL: string
    private productName: string
    private productType: string
    private submitProductButton: string
    private newCreatedProduct: string
    private eachProductInfo: string
    private errorMessage:string
    private productButtons:string
    private insightTypeAmount:string
    private insightViewButton:string

    constructor() {
        this.addProductButton = 'button.list-add-button';
        this.menuContentPageURL = 'http://localhost:4200/';
        this.productName = 'input';
        this.productType = 'mat-select';
        this.submitProductButton = '.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary'
        this.newCreatedProduct = 'div > div > mat-card.mat-focus-indicator.list-row'
        this.eachProductInfo = '.list-col'
        this.errorMessage = 'mat-error'
        this.productButtons = 'div > div > mat-card.mat-focus-indicator.list-row > div > mat-icon'
        this.insightViewButton = '.list-insights-button'
        this.insightTypeAmount = 'div.insights-value.ng-star-inserted'

    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public openProductForm(): void {
        cy.get(this.addProductButton).click()
    }

    public writeProductName(name:string): void {
        cy.get(this.productName).eq(0).type(name)
    }

    public writeProductSellIn(sellIn:string): void {
        cy.get(this.productName).eq(1).type(sellIn)
    }

    public writeProductQuality(quality:string): void {
        cy.get(this.productName).eq(2).type(quality)
    }

    public selectProductType(type:string): void {
        cy.get(this.productType).click();
        cy.get('.mat-option-text').contains(type).click()
    }

    public submitProduct(): void {
        cy.get(this.submitProductButton).click()
        cy.wait(500)
    }

    public editProduct(): void {
        cy.get(this.productButtons).contains('edit').click()
    }

    public deleteProduct(productName: string): void {
        cy.get('div > div > mat-card > div.list-col').contains(productName).parent().contains('delete').click()
    }

    public confirmDelete(): void{
        cy.contains('Delete').click()
        cy.wait(500)
    }

    public validateCreatedProduct(info: string[]){
        for (let i = 0; i <= 3; i++) {
            cy.get(this.newCreatedProduct).last().children(this.eachProductInfo).eq(i).should('contain.text', info[i]);
        } 
    }

    public validateDisabledAddButton(): void {
        cy.get(this.submitProductButton).should('be.disabled')
    }

    public validateWarningQuality(expectedWarningMessage: string): void {
        cy.get(this.errorMessage).should('contains.text',expectedWarningMessage)
    }

    public validateInsightsView(typeToFind:string, typeAmount: number): void {
        cy.get(this.insightViewButton).click()
        cy.get(this.insightTypeAmount).contains(typeToFind).next().should('contain.text',typeAmount)
    }
    
    public validateDeletedProduct(productName:string): void {
        cy.get('div > div > mat-card ').each((item)=>{cy.wrap(item).children().first().should('not.contain.text',productName)})
    }
}
export { MenuContentPage }