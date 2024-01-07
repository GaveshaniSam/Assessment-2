const {test,expect} =require("@playwright/test")
const { title } = require('process')

//....Test Case - Verify Wiley Online Library Website Title on the Tab....

test("Verify Wiley Online Library Website Title on the Tab",async function({page}){


    // Navigate to the Website
    await page.goto("https://onlinelibrary.wiley.com")

    const url=await page.url()

    console.log("Title is "+url)

    console.log("Title is "+title)

    await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works")

    // Add a wait 
    await page.waitForTimeout(6000);

})