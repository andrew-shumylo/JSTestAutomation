const { Driver } = require('selenium-webdriver/chrome');
const Page = require('./page');

class ShopPage extends Page{
    driver = new Driver();
    //Page Locators
    get productSortContainer() {return $('.product_sort_container')}
    get filterFromHighToLow() {return $('//option[@value="hilo"]')}
    get filterFromHighToLow() {return $("option[value='hilo']")}
    get mostExpensiveItem() {return $('//div[normalize-space()="Sauce Labs Backpack"]')}
    get addToCartButton() {return $('#add-to-cart-sauce-labs-backpack')}
    get cartIsNotEmpty() {return $(".shopping_cart_badge")}
    get cartLogo() {return $('.shopping_cart_link')}
    get verifyItemInCart() {return $(".inventory_item_price")}
    get checkoutButton() {return $("#checkout")}
    get firstNameField() {return $('#first-name')}
    get lastNameField() {return $('#last-name')}
    get zipCodeField() {return $("#postal-code")}
    get continueButton() {return $("#continue")}
    get totalPrice() {return $('.summary_total_label')}
    get finishButton() {return $("#finish")}
    get verifyDisplayedElement () {return $('//h2[normalize-space()="THANK YOU FOR YOUR ORDER"]')}

    //Page Actons
    //sort Products
    async sortProducts(){
        await this.productSortContainer.click();
        await this.filterFromHighToLow.click();
        await this.filterFromHighToLow.click();
    }

    //select most expensive item on the page
    async selectMostExpensiveItem(){
        await this.mostExpensiveItem.click();
        await this.addToCartButton.click();
    }

    //verify item in the cart
    async verifyItemInTheCart(){
        await this.cartIsNotEmpty.getAttribute("1");
    }

    //go to cart
    async goToCart(){
        await this.cartLogo.click();
        await this.verifyItemInCart.getAttribute("29.99");
        await this.checkoutButton.click();
    }

    //make order
    async makeOrder(firstName, lastName, zipCode){
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.zipCodeField.setValue(zipCode);
        await this.continueButton.click();
    }

    async verifyTotalPrice(){
        await this.totalPrice.getAttribute("32.39");
    }

    async finishOrder(){
        await this.finishButton.click();
    }
}

module.exports = new ShopPage();