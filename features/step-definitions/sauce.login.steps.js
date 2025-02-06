import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjectsnew/login.page';

Given(/^User is located on the main page of saucedemo website$/, async () => {
	await loginPage.open()
});

When(/^User click “Login” button$/, async () => {
	await loginPage.login('', '')
});

Then(/^User should see “Epic sadface: Username is required” error message$/, async () => {
	await expect(loginPage.errorMessageUserRequired)
}); 