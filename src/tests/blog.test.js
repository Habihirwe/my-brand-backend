
import mongoose from "mongoose";
import request from "supertest";
import app from "../../server";

describe("show all blogs if are available",()=>{
    
    it("should return a status of 200 if found",async()=>{
        const response=await request(app).get("/api/getallblogs");
        expect(response.status).toBe(200)

    }),
    it("should return a status of 200 if found",async()=>{
        const response=await request(app).get("/api/getSingleBlog/63d6bddbd7ef7f268a27bb3a");
        expect(response.status).toBe(200)

    })
    
    it("should return a status of 200 if found",async()=>{
        const response=await request(app).get("/api/createBlog");
        expect(response.status).toBe(200)

    }),
    it("should return a status of 200 if found",async()=>{
        const response=await request(app).get("/api/deleteBlog/:id");
        expect(response.status).toBe(200)

    })
    
    



});

