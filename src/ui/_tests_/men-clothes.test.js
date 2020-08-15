import { launchBrowser } from "../launcher/browser";
let page;
let masterData = [];

beforeAll(async () => {
    page = await launchBrowser();
})

describe('Demo Test', () => {
    test('Inside test', async () => {
      await page.goto("https://www2.hm.com/en_in/men/new-arrivals/clothes.html", { timeout: 220000, waitUntil: 'load' });  //navigating to application
  
      // getting present visible count and total count from page
      await page.waitForSelector("h2[class='load-more-heading']");
      const productsCount = await page.$eval("h2[class='load-more-heading']", element => element.getAttribute("data-total"))
      const alreadyPresentCount = await page.$eval("h2[class='load-more-heading']", element => element.getAttribute("data-items-shown"))
     
      try {
        while (alreadyPresentCount !== productsCount) {
          const loadMoreButton = await page.waitForSelector('button.button.js-load-more ');
          await loadMoreButton.click();
        }
      } catch (err) { }
  
      await page.waitFor(2000);
  
      const allLinks = await page.evaluate(() => Array.from(document.querySelectorAll('a.item-link.remove-loading-spinner'), element => element.href));
      const allCount = allLinks.length;
      for (let item = 0; item < 10; item++) {   // count is 10 just for demo purpose
  
        try {
          const productDetails = {};
          // navigating to product pages
          await page.goto(allLinks[item], { timeout: 220000, waitUntil: 'load' });  //navigating to application
  
          // adding title
          const titleElement = await page.waitForSelector("h1[class='primary product-item-headline']");
          const title = await (await titleElement.getProperty('innerText')).jsonValue();
          productDetails['title'] = title;
  
          // adding images
          const imageLinks = await page.evaluate(() => Array.from(document.querySelectorAll('div.module.product-description.sticky-wrapper figure img'), element => element.src));
          productDetails['images'] = imageLinks;
  
          // adding product details
          const detailsButton = await page.waitForSelector("button.label-copy.js-open-more-details");
          await detailsButton.click();
  
          const details = await page.$$("div.details-attributes-list-item", { visible: true });
  
          await Promise.all(details.map(async (detail, index) => {
            const data = await (await detail.getProperty('innerText')).jsonValue();
            const headerAndValue = data.split("\n");
            console.log("#######################", headerAndValue);
            productDetails[headerAndValue[0]] = headerAndValue[1].trim();
          }));
          console.log("############################## Product detail #############################")
          console.log(productDetails);
          masterData.push(productDetails);
        } catch (err) { };
      }
  
    })
  })