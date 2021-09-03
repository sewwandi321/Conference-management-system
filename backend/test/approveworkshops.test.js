const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
      expect(true).toBe(true);
    });
  });

  test("test Approve Workshop", async () => {
    const result = await supertest(app)
    put('/api/approveworkshops/approve/:_id')
      .send({
        status: "approved"
        
      });
    expect(result.statusCode).toBe(201);
  });

  test("test Reject Workshop", async () => {
    const result = await supertest(app)
    put('/api/approveworkshops/reject/:_id')
      .send({
        status: "rejected"
        
      });
    expect(result.statusCode).toBe(201);
  });
  
test("test approve Workshop ", async () => {
    const result = await supertest(app)
      .get("/api/approveworkshops")
      .send({});
    expect(result.statusCode).toBe(200);
  });
  