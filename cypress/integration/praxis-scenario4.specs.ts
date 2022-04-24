import { MenuContentPage } from "../page/Praxis/index";

describe("the user open the page", () => {
  let menuContentPage: MenuContentPage;
  let name: string;
  let sellIn: string;
  let quality: string;
  let type: string;
  let name2: string;
  let sellIn2: string;
  let quality2: string;
  let type2: string;
  let typeAmount: number;

  before(() => {
    menuContentPage = new MenuContentPage();
    cy.request("http://localhost:8080/api/items").then((response) => {
      response.body.forEach((item) => {
        cy.request("DELETE", `http://localhost:8080/api/items/${item.id}`);
      });
    });
  });

  it("deleting product", () => {
    // Arrange
    name = "Sugar";
    sellIn = "15";
    quality = "30";
    type = "NORMAL";
    name2 = "Wine";
    sellIn2 = "15";
    quality2 = "30";
    type2 = "AGED";
    typeAmount = 0;
    menuContentPage.visitMenuContentPage();
    menuContentPage.openProductForm();
    menuContentPage.writeProductName(name);
    menuContentPage.writeProductSellIn(sellIn);
    menuContentPage.writeProductQuality(quality);
    menuContentPage.selectProductType(type);
    menuContentPage.submitProduct();
    menuContentPage.openProductForm();
    menuContentPage.writeProductName(name2);
    menuContentPage.writeProductSellIn(sellIn2);
    menuContentPage.writeProductQuality(quality2);
    menuContentPage.selectProductType(type2);
    menuContentPage.submitProduct();
    // Action
    menuContentPage.deleteProduct(name);
    menuContentPage.confirmDelete();
    // Assert
    menuContentPage.validateDeletedProduct(name);
    menuContentPage.validateInsightsView(type, typeAmount);
  });
});
