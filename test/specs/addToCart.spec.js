const LoginPage = require('../pages/login.page');
const ShopPage = require('../pages/shop.page');

describe('End-To-End test: ', ()=> {
    it('Open BaseURL', async ()=>{
        await browser.url('');
    });
    
    it('Enter valid Username and Password, then click Login-button', async ()=>{
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    })

    it('Select Most Expensive Item displayed in the Page', async ()=>{
        await ShopPage.selectMostExpensiveItem();
    })
    
    it('Verify Item in the Cart', async ()=>{
        await ShopPage.verifyItemInTheCart();
    })

    it('Go To Cart', async ()=>{
        await ShopPage.goToCart();
    })

    it('Make Order', async ()=>{
        await ShopPage.makeOrder('Test', 'Guy', '12345');
    })

    it('Verify Total Price', async ()=>{
        await ShopPage.verifyTotalPrice();
    })

    it ('Finish Order', async ()=>{
        await ShopPage.finishOrder();
    })
})