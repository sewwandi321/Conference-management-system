const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
      expect(true).toBe(true);
    });
  });

test("test addworkshops without relevent data", async () => {
    const result = await supertest(app)
      .post("/api/workshop/create")
      .send({});
    expect(result.statusCode).toBe(500);
  });

  test("test createWorkshops controller with relevent data", async () => {
    const result = await supertest(app)
      .post("/api/workshop/create")
      .send({
        date: "Test Test",
        email: "testCat",
        topic: "testCat-01",
        
      });
    expect(result.statusCode).toBe(201);
  });
  
test("test getWorkshops controller ", async () => {
    const result = await supertest(app)
      .get("/workshops")
      .send({});
    expect(result.statusCode).toBe(200);
  });
  