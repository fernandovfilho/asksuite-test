module.exports = (checkin, checkout) => {
  const searchParamsUrl =
    process.env.SEARCH_PARAMS_URL ||
    "&Code=AMIGODODANIEL&NRooms=1&_askSI=d34b1c89-78d2-45f3-81ac-4af2c3edb220&ad=2&ag=-&c=2983&ch=0&diff=false&group_code=&lang=pt-BR&loyality_card=&utm_source=asksuite&q=5462#show-more-hotel-button";
  const baseUrl =
    process.env.BASE_URL || "https://book.omnibees.com/hotelresults?";
  const searchUrl = `${baseUrl}checkin=${checkin}&checkout=${checkout}${searchParamsUrl}`;
  return searchUrl;
};
