const mongoose = require("mongoose");
const request = require("supertest");
const app = require("express");
require("dotenv").config();

describe("GET /index.html", () => {
    it("should return 200", async () => {
        return request(app)
            .get("/index.html")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });
});
