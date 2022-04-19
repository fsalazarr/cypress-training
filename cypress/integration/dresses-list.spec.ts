import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsNames(["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"]);
  });
});
