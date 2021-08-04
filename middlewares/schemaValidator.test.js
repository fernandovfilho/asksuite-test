const SchemaValidator = require("./schemaValidator");
const searchPayloadSchema = require("../schemas/searchPayloadSchema");
const validator = new SchemaValidator();

describe("validate search payload schema tests", () => {
  test("checkin date is after the checkout date, must return an error", () => {
    const payload = {
      checkin: "2021-07-05",
      checkout: "2021-07-03",
    };
    expect(
      validator.validateSchema(searchPayloadSchema, payload)
    ).toMatchObject({ error: {} });
  });

  test("checkin date or checkout date are not valid, must return an error", () => {
    const payload = {
      checkin: "2021-20-01",
      checkout: "2021-07-03",
    };
    expect(
      validator.validateSchema(searchPayloadSchema, payload)
    ).toMatchObject({ error: {} });
  });
});
