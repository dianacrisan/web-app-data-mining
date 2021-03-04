// function for launching the browser
const launchBrowserChrome = async () => {
    const puppeteer = require("puppeteer");

    const args = [
        "--disable-dev-shm-usage",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
        "--lang=en-US,en"
    ];

    let browserChrome;
    try {
        browserChrome = await puppeteer.launch({
            headless: true, // run in headless mode
            devtools: false, // disable dev tools
            ignoreHTTPSErrors: true, // ignore https error
            args,
            ignoreDefaultArgs: ["--disable-extensions"],
        });
    } catch (e) {
        console.error("Unable to launch chrome", e);
        // return two functions to silent errors
        return [() => {}, () => {}];
    }

     // function for creating a new page inside the browser
     const newBrowserPage = async () => {
        try {
            const page = await browserChrome.newPage();
            const closePage = async () => {
                if (!page) return;
                try {
                    await page.close();
                } catch (e) { }
            }
            return [page, closePage];
        } catch (e) {
            console.error("Error while trying to create a new browser page");
            return [];
        }
    };

    // function for exiting the browser
    const exitBrowserChrome = async () => {
        if (!browserChrome) return;
        try {
            await browserChrome.close();
        } catch (e) { }
    }

    return [newBrowserPage, exitBrowserChrome];
};

module.exports = { 
    launchBrowserChrome 
};