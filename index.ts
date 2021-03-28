import puppeteer from 'puppeteer';

async function main() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.goto("https://accounts.google.com/servicelogin");


}
function wait(ms: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}
main();