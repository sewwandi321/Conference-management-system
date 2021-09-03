const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
      expect(true).toBe(true);
    });
  });

test("test add payment without relevent data", async () => {
    const result = await supertest(app)
      .post("/payment/conference/create")
      .send({});
    expect(result.statusCode).toBe(500);
  });

  test("test addPayment controller with relevent data", async () => {
    const result = await supertest(app)
      .post("/payment/conference/create")
      .send({
        name: "Test Test",
        date: "testCat",
        email: "testCat-01",
       
      });
    expect(result.statusCode).toBe(201);
  });
  

  