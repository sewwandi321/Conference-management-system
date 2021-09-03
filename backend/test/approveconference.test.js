const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
      expect(true).toBe(true);
    });
  });

  test("test Approve Conference", async () => {
    const result = await supertest(app)
    put('/api/approveconference/:_id')
      .send({
        status: "approved"
        
      });
    expect(result.statusCode).toBe(201);
  });

  test("test Reject Conference", async () => {
    const result = await supertest(app)
    put('/api/rejectconference/:_id')
      .send({
        status: "rejected"
        
      });
    expect(result.statusCode).toBe(201);
  });
  
test("test approve Conference ", async () => {
    const result = await supertest(app)
      .get("/api/getapproveconference")
      .send({});
    expect(result.statusCode).toBe(200);
  });
  