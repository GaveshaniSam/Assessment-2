const {test,expect} =require("@playwright/test")

//....Test Case - Verify that the search results are accurate and relevant....

test("Verify that the search results are accurate and relevant",async function({page}){

  // Navigate to Wiley Online Library
  await page.goto('https://onlinelibrary.wiley.com/');

  
  // Enter User name
  const searchPlaceholder = "Search publications, articles, keywords, etc.";
  await page.fill(`[placeholder="${searchPlaceholder}"]`, "Computer Science");

  // Perform a search
  await page.locator("//button[@title='Search']").click()

  // Add a wait 
  await page.waitForTimeout(6000);

})