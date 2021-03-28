"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = __importDefault(require("puppeteer"));
var fs_1 = __importDefault(require("fs"));
var child_process_1 = __importDefault(require("child_process"));
var credLocation = "./creds.json";
if (!fs_1.default.existsSync(credLocation)) {
    fs_1.default.writeFileSync(credLocation, "{\n    \"email\": \"[INSERT_EMAIL_HERE]\",\n    \"password\": \"[INSERT_PASSWORD_HERE]\"\n}");
    child_process_1.default.execSync("start creds.json");
    process.exit(0);
}
var meetLink = process.argv[2];
var eIn = Number(process.argv[3]);
var wf = Number(process.argv[4]) || 0;
if (Number.isNaN(eIn)) {
    throw new Error("Vole ses kokot.");
}
var creds = JSON.parse(fs_1.default.readFileSync(credLocation).toString());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer_1.default.launch({
                        headless: false,
                        args: ['--use-fake-ui-for-media-stream']
                    })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto("https://accounts.google.com/servicelogin")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, fillInput(page, "whsOnd zHQkBf", creds.email)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, clickButton(page, "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b")];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, waitForRequests(page, 7)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, wait(200 + wf)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, fillInput(page, "whsOnd zHQkBf", creds.password)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, clickButton(page, "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b")];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, waitForRequests(page, 30)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, wait(200)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, page.goto(meetLink)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, clickButton(page, "U26fgb JRY2Pb mUbCce kpROve uJNmj HNeRed QmxbVb")];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, clickButton(page, "U26fgb JRY2Pb mUbCce kpROve uJNmj HNeRed QmxbVb")];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, wait(500)];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, clickButton(page, "uArJ5e UQuaGc Y5sE8d uyXBBb xKiqt")];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, wait(eIn)];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 18:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function fillInput(page, cls, text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.evaluate(function (cls, text) {
                        var arr = document.getElementsByClassName(cls);
                        for (var i = 0; i < arr.length; i++) {
                            arr[i].value = text;
                        }
                    }, cls, text)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function clickButton(page, cls) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.evaluate(function (cls) {
                        var arr = document.getElementsByClassName(cls);
                        for (var i = 0; i < arr.length; i++) {
                            arr[i].click();
                        }
                    }, cls)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function wait(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
}
function waitForRequests(page, n, check) {
    if (check === void 0) { check = function () { return true; }; }
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < n)) return [3 /*break*/, 4];
                    return [4 /*yield*/, page.waitForRequest(check)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function installChromium() {
    return new Promise(function (resolve, reject) {
        child_process_1.default.fork("./node_modules/puppeteer/install.js").on("close", function () {
            resolve();
        });
    });
}
main();
