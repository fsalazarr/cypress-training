import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let names: string[];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    // Arrange
    names = ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"];
    menuContentPage.visitMenuContentPage();
    // Action
    menuContentPage.goToDressesMenu();
    // Assert
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsNames(names);
  });
});
