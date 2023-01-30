const Page = require('./page');

class HomePage extends Page{

    //page locator of Logo in Header
    get appLogo() {return $('.app_logo')}

    //verify that Logo is presented
    async isLogoIsPresented(){
        return await this.appLogo.isDisplayed();
    }
}

module.exports = new HomePage();