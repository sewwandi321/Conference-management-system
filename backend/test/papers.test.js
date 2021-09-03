const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
      expect(true).toBe(true);
    });
  });

test("test add papers without relevent data", async () => {
    const result = await supertest(app)
      .post("/api/paper/create")
      .send({});
    expect(result.statusCode).toBe(500);
  });

  test("test createPapers controller with relevent data", async () => {
    const result = await supertest(app)
      .post("/api/paper/create")
      .send({
        title: "Test Test",
        description: "testCat",
        email: "testCat-01",
        status:"testCat-02",
        // researchpaper:"testCat-03"
      });
    expect(result.statusCode).toBe(201);
  });
  
test("test getPapers controller ", async () => {
    const result = await supertest(app)
      .get("/api/allpper/")
      .send({});
    expect(result.statusCode).toBe(200);
  });
  