import BasePage from "./base.page";

class LoginPage extends BasePage{

    get inputUsername () {return $('#user-name');}
    get inputPassword () {return $('#password');}
    get loginBtn () {return $('#login-button')}
    // get errorMessageUserRequired () {return $('h3[data-test="error"]').toHaveText('Epic sadface: Username is required')}
    get errorMessageUserRequired () {return $('//h3[text()="Epic sadface: Username is required"]')}
    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    open () {
        return super.open('login');
    }

}

export default new LoginPage()