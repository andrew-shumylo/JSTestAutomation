const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');

describe('Login page validation', ()=> {
it('Open BaseURL', async ()=>{
    await browser.url('');
});

it('Enter valid Username and Password, then click Login-button', async ()=>{
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await assert.equal(true, await HomePage.isLogoIsPresented());
})
})