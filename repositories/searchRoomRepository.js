module.exports = {
  async getContent(page) {
    let rooms = await page.evaluate(async () => {
      let data = [];
      const elements = document.getElementsByClassName("roomrate");
      for (const element of elements) {
        const nameElements =
          element.getElementsByClassName("custom-hotel-name");
        const name = await clearElement(nameElements[0].textContent);

        const descriptionElements =
          element.getElementsByClassName("hotel-description");
        const description = await clearElement(
          descriptionElements[0].textContent
        );

        data.push({
          name,
          description,
        });
      }
      return data;
    });

    return rooms;
  },
};
