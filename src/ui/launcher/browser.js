import puppeteer from 'puppeteer';
let browser, page;

export async function launchBrowser() {
    browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized'],
        defaultViewport: null,
        ignoreHTTPSErrors: true
    });
    const pages = await browser.pages();

    return pages[0];  // defalut about blank page
}
