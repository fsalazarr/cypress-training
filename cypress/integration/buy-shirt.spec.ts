import {
  MenuContentPage, ProductListPage, ShoppingCartPage,
  LoginPage, AddressStepPage, ShippingStepPage, PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirt();
    productListPage.proceedPopoutCheckOut();
    shoppingCartPage.proceedSummaryCheckOut();
    loginPage.writeEmail();
    loginPage.writePassword();
    loginPage.signIn();
    addressStepPage.proceedAddressCheckout();
    shippingStepPage.agreeTC();
    shippingStepPage.proceedShippingCheckout();
    paymentStepPage.selectPaymentMethod();
    paymentStepPage.confirmOrder();
    paymentStepPage.verifyOutput();
  });
});
