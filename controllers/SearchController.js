const BrowserService = require("../services/BrowserService");
const { DateTime } = require("luxon");

class SearchController {
  roomSearch = async (request, response) => {
    try {
      let { checkin, checkout } = request.body;
      checkin = DateTime.fromISO(checkin).toFormat("ddMMyyyy");
      checkout = DateTime.fromISO(checkout).toFormat("ddMMyyyy");

      const rooms = await BrowserService.roomSearch(checkin, checkout);
      response.json(rooms);
    } catch (error) {
      response.status(500).json(error);
    }
  };
}

module.exports = new SearchController();
