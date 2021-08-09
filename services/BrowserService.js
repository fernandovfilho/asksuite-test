const puppeteer = require("puppeteer");
const clearElementString = require("../helpers/clearElementString");
const generateRoomSearchUrl = require("../helpers/generateRoomSearchUrl");
const { getContent } = require("../repositories/searchRoomRepository");

class BrowserService {
  static getBrowser() {
    return puppeteer.launch();
  }

  static closeBrowser(browser) {
    if (!browser) {
      return;
    }
    return browser.close();
  }

  static async roomSearch(checkin, checkout) {
    try {
      const searchUrl = generateRoomSearchUrl(checkin, checkout);

      const browser = await this.getBrowser();
      const page = await browser.newPage();
      await page.exposeFunction("clearElementString", clearElementString);
      await page.goto(searchUrl, {
        waitUntil: "networkidle0",
      });
      const rooms = await getContent(page);
      this.closeBrowser(browser);
      return rooms;
    } catch (error) {
      this.closeBrowser(browser);
      throw error;
    }
  }
}

module.exports = BrowserService;
