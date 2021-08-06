const { DateTime } = require("luxon");
const supertest = require("supertest");
const app = require("../app");

describe("POST /search integration tests", () => {
  let server = null;

  beforeAll(() => {
    server = app.listen();
  });

  afterAll(() => {
    server.close();
  });

  test(
    "POST /search with valid dates",
    async () => {
      const body = {
        checkin: DateTime.now().plus({ days: 30 }).toFormat("yyyy-MM-dd"),
        checkout: DateTime.now().plus({ days: 32 }).toFormat("yyyy-MM-dd"),
      };
      const response = await supertest(server).post("/search").send(body);

      server.close();

      expect(response.statusCode).toEqual(200);
      expect(response.body).toEqual(expect.arrayContaining([]));
    },
    1000 * 30
  );

  test(
    "POST /search with invalid dates",
    async () => {
      const body = {
        checkin: "2021-20-09",
        checkout: "2021-09-21",
      };

      const response = await supertest(server).post("/search").send(body);

      expect(response.statusCode).toEqual(422);
    },
    1000 * 30
  );
});
