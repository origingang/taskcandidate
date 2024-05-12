const mongoose = require("mongoose");
const request = require("supertest");
const app = require("express");
require("dotenv").config();

describe("GET /index.html", () => {
    it("should return 200", async () => {
        return request(app)
            .get("/")
            .expect('Content-Type', text/html)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });
});
