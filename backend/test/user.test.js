const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
      expect(true).toBe(true);
    });
  });

test("test register users without relevent data", async () => {
    const result = await supertest(app)
      .post("/api/signup")
      .send({});
    expect(result.statusCode).toBe(500);
  });

  test("test createPapers controller with relevent data", async () => {
    const result = await supertest(app)
      .post("/api/signup")
      .send({
        name: "saman perera",
        email: "saman98@gmail.com",
        password: "saman98",
        role:"researcher",
        contactnumber:"0711339887"
        
      });
    expect(result.statusCode).toBe(201);
  });
  
test("test getPapers controller ", async () => {
    const result = await supertest(app)
      .get("/api/allpper/")
      .send({});
    expect(result.statusCode).toBe(200);
  });
  