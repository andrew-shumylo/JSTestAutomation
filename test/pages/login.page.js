const Page = require('./page')

class LoginPage extends Page{
    //Page Locators
    get inputUsername() {return $('#user-name')}
    get inputPassword() {return $('#password')}
    get loginButton() {return $('#login-button')}

    //Page Actions
    //open BaseURL
    async open(){
        await super.open('/')
    }

    //enter username, password and press login-button
    async login (username, password){
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();