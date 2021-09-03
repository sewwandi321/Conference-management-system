const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
      expect(true).toBe(true);
    });
  });

test("test add conference without relevent data", async () => {
    const result = await supertest(app)
      .post("/api/conference/addconference")
      .send({});
    expect(result.statusCode).toBe(500);
  });

  test("test create conference controller with relevent data", async () => {
    const result = await supertest(app)
      .post("/api/conference/addconference")
      .send({
        title: "Test Test",
        description: "testCat",
        email: "testCat-01",
        status:"testCat-02",
        date:"testCat-03"
       
      });
    expect(result.statusCode).toBe(201);
  });
  
test("test getConference controller ", async () => {
    const result = await supertest(app)
      .get("/api/getconference")
      .send({});
    expect(result.statusCode).toBe(200);
  });
  