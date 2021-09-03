const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
      expect(true).toBe(true);
    });
  });



  test("test Approve reseach papers", async () => {
    const result = await supertest(app)
    put('/api/paper/approveper/:_id')
      .send({
        status: "approved"
        
      });
    expect(result.statusCode).toBe(201);
  });

  test("test Reject reseach papers", async () => {
    const result = await supertest(app)
    put('/api/paper/rejectpaper/:_id')
      .send({
        status: "rejected"
        
      });
    expect(result.statusCode).toBe(201);
  });
  
test("test approve reseachpapers ", async () => {
    const result = await supertest(app)
      .get("/api/approvep/")
      .send({});
    expect(result.statusCode).toBe(200);
  });
  