// const https = require('https');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const puppeteer = require('puppeteer');

const getDataFromUrl = async () => {
    const { launchBrowserChrome } = require("./Browser");
    const [newBrowserPage, exitBrowserChrome] = await launchBrowserChrome();

    const [page] = await newBrowserPage();
    // being able to console.log while evaluating the page
    page.on('console', consoleObj => console.log(consoleObj.text()));
    if (!page) return;

    const url = 'https://www.leroymerlin.ro/products/ciment-mortare-tencuieli-sape-gleturi/470';
    console.log("Opening " + url);

    try {
        await page.goto(url, {
            waitUntil: "networkidle0", // wait until all of the network requests have been processed
        });
        console.log("Prepared for extraction...");

        // extracting the data (WHY DOES IT NOT WORK????)
        // const result = await page.evaluate(() => {
        //     const dataElements = document.querySelectorAll('.product-holder');
        //     const dataElementsLength = dataElements.length;
        //     console.log("Length: " + dataElementsLength);
        //     let data = [];
        //     for (let i = 0; i < dataElementsLength; i++) {
        //         try {
        //             const element = dataElements[i];
        //             const elementName = element.innerText;

        //             // date of extraction
        //             var now = new Date();
        //             var date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
        //             var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        //             var dateTime = date + ' ' + time;

        //             data.push({ elementName, dateTime });
        //         } catch (e) {
        //             console.log("Error while trying to parse the data array");
        //         }
        //     }
        //     return {
        //         data
        //     }
        // });

        // console.log(result);

    } catch (e) {
        console.error("Unable to open " + url, e);
        await exitBrowserChrome(); // close chrome on error
        return; // exiting the function
    }
    await exitBrowserChrome();
};

module.exports = {
    getDataFromUrl
};