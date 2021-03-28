import puppeteer from 'puppeteer';
import fs from 'fs';
import childProcess from 'child_process';


const credLocation = "./creds.json";

if (!fs.existsSync(credLocation)) {
    fs.writeFileSync(credLocation, `{\n    "email": "[INSERT_EMAIL_HERE]",\n    "password": "[INSERT_PASSWORD_HERE]"\n}`);
    childProcess.execSync("start creds.json")
    process.exit(0);
}
const meetLink = process.argv[2];
const eIn = Number(process.argv[3]);

const wf = Number(process.argv[4]) || 0;

if (Number.isNaN(eIn)) {
    throw new Error("Vole ses kokot.");
}

const creds: {email: string, password: string} = JSON.parse(fs.readFileSync(credLocation).toString());
async function main() {
    const browser = await puppeteer.launch({
        headless: false,
        args: [ '--use-fake-ui-for-media-stream' ]
    });
    const page = await browser.newPage();

    await page.goto("https://accounts.google.com/servicelogin");

    await fillInput(page, "whsOnd zHQkBf", creds.email);
    await clickButton(page, "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b");

    await waitForRequests(page, 7);
    await wait(200 + wf);

    await fillInput(page, "whsOnd zHQkBf", creds.password);
    await clickButton(page, "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b");

    await waitForRequests(page, 30);
    await wait(200);

    await page.goto(meetLink);
    
    await clickButton(page, "U26fgb JRY2Pb mUbCce kpROve uJNmj HNeRed QmxbVb");
    await clickButton(page, "U26fgb JRY2Pb mUbCce kpROve uJNmj HNeRed QmxbVb");

    await wait(500);

    await clickButton(page, "uArJ5e UQuaGc Y5sE8d uyXBBb xKiqt");

    await wait(eIn);

    await browser.close();
}
async function fillInput(page: puppeteer.Page, cls: string, text: string): Promise<void> {
    return await page.evaluate((cls: string, text: string) => {
        const arr = document.getElementsByClassName(cls) as HTMLCollectionOf<HTMLInputElement>;
        for (var i = 0; i < arr.length; i++) {
            arr[i].value = text;
        }
    }, cls, text);
}
async function clickButton(page: puppeteer.Page, cls: string): Promise<void> {
    return await page.evaluate((cls: string) => {
        const arr = document.getElementsByClassName(cls) as HTMLCollectionOf<HTMLButtonElement>;
        for (var i = 0; i < arr.length; i++) {
            arr[i].click();
        }
    }, cls);
}
function wait(ms: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}
async function waitForRequests(page: puppeteer.Page ,n: number, check: () => boolean = () => true): Promise<void> {
    for (var i = 0; i < n; i++) {
        await page.waitForRequest(check);
    }
}
function installChromium(): Promise<void>{
    return new Promise<void>((resolve, reject) =>{
        childProcess.fork("./node_modules/puppeteer/install.js").on("close", () => {
            resolve();
        });
    });
}
main();