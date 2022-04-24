import { MenuContentPage } from "../page/Praxis/index";

describe("the user open the page", () => {
  let menuContentPage: MenuContentPage;
  let name: string;
  let sellIn: string;
  let quality: string;
  let type: string;
  let newType: string;
  let productInfo: string[];
  let typeAmount: number;

  before(() => {
    menuContentPage = new MenuContentPage();
    cy.request("http://localhost:8080/api/items").then((response) => {
      response.body.forEach((item) => {
        cy.request("DELETE", `http://localhost:8080/api/items/${item.id}`);
      });
    });
  });

  it("editing correctly the type of the product", () => {
    // Arrange
    name = "Sugar";
    sellIn = "15";
    quality = "30";
    type = "NORMAL";
    newType = "AGED";
    productInfo = [name, sellIn, quality, newType];
    typeAmount = 1;
    menuContentPage.visitMenuContentPage();
    menuContentPage.openProductForm();
    menuContentPage.writeProductName(name);
    menuContentPage.writeProductSellIn(sellIn);
    menuContentPage.writeProductQuality(quality);
    menuContentPage.selectProductType(type);
    menuContentPage.submitProduct();
    // Action
    menuContentPage.editProduct();
    menuContentPage.selectProductType(newType);
    menuContentPage.submitProduct();
    // Assert
    menuContentPage.validateCreatedProduct(productInfo);
    menuContentPage.validateInsightsView(newType, typeAmount);
  });
});
