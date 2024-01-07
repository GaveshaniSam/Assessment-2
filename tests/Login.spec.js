const {test,expect} =require("@playwright/test")

//Test Case - Verify users can successfully log in to their Wiley Online Library accounts

test("Verify users can successfully log in to their Wiley Online Library accounts",async function({page}){
    await page.goto("https://onlinelibrary.wiley.com/")

    // Enter User name
    await page.getByPlaceholder("Enter your email").type("gaveshaniupekshanikethani@gmail.com")

    // Enter Password
    await page.getByPlaceholder("Enter your password").type("***********")

    // Submit Login Button
    await page.locator("//button[@type='submit']").click()


})