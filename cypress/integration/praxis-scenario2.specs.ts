import { MenuContentPage } from "../page/Praxis/index";

describe("the user open the page", () => {
  let menuContentPage: MenuContentPage;
  let name: string;
  let sellIn: string;
  let quality: string;
  let type: string;
  let expectedWarningMessage: string;

  before(() => {
    menuContentPage = new MenuContentPage();
    cy.request("http://localhost:8080/api/items").then((response) => {
      response.body.forEach((item) => {
        cy.request("DELETE", `http://localhost:8080/api/items/${item.id}`);
      });
    });
  });

  it("adding items with miss information", () => {
    // Arrange
    name = "Sugar";
    sellIn = "15";
    quality = "-30";
    type = "NORMAL";
    expectedWarningMessage = "Expected value between 0 and 80";
    menuContentPage.visitMenuContentPage();
    // Action
    menuContentPage.openProductForm();
    menuContentPage.writeProductName(name);
    menuContentPage.writeProductSellIn(sellIn);
    menuContentPage.writeProductQuality(quality);
    menuContentPage.selectProductType(type);
    // Assert
    menuContentPage.validateDisabledAddButton();
    menuContentPage.validateWarningQuality(expectedWarningMessage);
  });
});
