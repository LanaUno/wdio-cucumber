import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^User is located on the main page of saucedemo website$/, async () => {
	await browser.url('https://www.saucedemo.com/')
});

When(/^User click “Login” button$/, async () => {
     await $('#login-button').click()
});

Then(/^User should see “Epic sadface: Username is required” error message$/, async () => {
	await expect($('h3[data-test="error"]')).toHaveText('Epic sadface: Username is required')
}); 
