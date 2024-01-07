const {test,expect} =require("@playwright/test")

//Test Case - Verify that the search results are accurate and relevant

test("Verify that the search results are accurate and relevant",async function({page}){

  // Navigate to Wiley Online Library
  await page.goto('https://onlinelibrary.wiley.com/');

  // Find and interact with the search input field
  const searchInput = await page.$('input[data-test="search-box-input"]');
  await searchInput.type('computer science');

  // Trigger the search (you might need to press 'Enter' or click a button)
  await searchInput.press('Enter');

  // Wait for the search results page to load
  await page.waitForNavigation();

  // You may need to wait for specific elements on the search results page to appear
  await page.waitForSelector('.search-results');

  // Perform assertions based on the search results
  const searchResults = await page.$$('.search-results .result-item');
  // Add your assertions here, for example:
  console.log(`Number of search results: ${searchResults.length}`);

  // Close the browser
  await browser.close();
})