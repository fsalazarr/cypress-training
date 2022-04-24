import { MenuContentPage } from "../page/Praxis/index";

describe("the user open the page", () => {
  let menuContentPage: MenuContentPage;
  let name: string;
  let sellIn: string;
  let quality: string;
  let type: string;
  let productInfo: string[];

  before(() => {
    menuContentPage = new MenuContentPage();
    cy.request("http://localhost:8080/api/items").then((response) => {
      response.body.forEach((item) => {
        cy.request("DELETE", `http://localhost:8080/api/items/${item.id}`);
      });
    });
  });

  it("adding items", () => {
    // Arrange
    name = "Sugar";
    sellIn = "15";
    quality = "30";
    type = "NORMAL";
    productInfo = [name, sellIn, quality, type];
    menuContentPage.visitMenuContentPage();
    // Action
    menuContentPage.openProductForm();
    menuContentPage.writeProductName(name);
    menuContentPage.writeProductSellIn(sellIn);
    menuContentPage.writeProductQuality(quality);
    menuContentPage.selectProductType(type);
    menuContentPage.submitProduct();
    // Assert
    menuContentPage.validateCreatedProduct(productInfo);
  });
});
