import puppeteer from 'puppeteer';

export async function launchBrowser() {

  const browser = await puppeteer.launch({
            headless: true,
            executablePath: process.env.CHROMIUM_PATH,
            args: ['--no-sandbox'],
            defaultViewport: null,
            ignoreHTTPSErrors: true
        });

   /*  const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized'],
        defaultViewport: null,
        ignoreHTTPSErrors: true
    }); */
    const pages = await browser.pages();

    return pages[0];  // defalut about blank page
}
