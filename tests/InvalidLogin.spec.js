const {test,expect} =require("@playwright/test")

//....Test Case - Attempt to log in with a valid username but an incorrect password....
test("Attempt to log in with a valid username but an incorrect password",async function({page}){

    //Navigate to Wiley Online Library
    await page.goto("https://onlinelibrary.wiley.com/")

    //Go to Login Pop-up
    await page.click("//span[@class='sign-in-label']");

   // Enter User name
   const usernamePlaceholder = "Enter your email";
   await page.fill(`[placeholder="${usernamePlaceholder}"]`, "gaveshaniupekshanikethani@gmail.com"); 

   // Enter Password
   const passwordPlaceholder = "Enter your password";
   await page.fill(`[placeholder="${passwordPlaceholder}"]`, "*********");
  
   //Click on login button
   await page.locator("//input[@name='submitButton']").click()

   //Add a wait after clicking the login button
   await page.waitForTimeout(6000); 

})