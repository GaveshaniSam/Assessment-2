const {test,expect} =require("@playwright/test")

//Test Case - Verify users can successfully log in to their Wiley Online Library accounts

test("Verify users can successfully log in to their Wiley Online Library accounts",async function({page}){
    await page.goto("https://onlinelibrary.wiley.com/")

    //Go to Login Pop-up
    await page.click("//span[@class='sign-in-label']");

   // Enter User name
  const usernamePlaceholder = "Enter your email";
  await page.fill(`[placeholder="${usernamePlaceholder}"]`, "gaveshaniupekshanikethani@gmail.com"); 

  // Enter Password
  const passwordPlaceholder = "Enter your password";
  await page.fill(`[placeholder="${passwordPlaceholder}"]`, "Friday@#098");
  
  //Click on login button
  await page.locator("//input[@name='submitButton']").click()

  // Add a wait after clicking the login button
  await page.waitForTimeout(6000); 



})