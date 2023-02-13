
import mongoose from "mongoose";
import request from "supertest";
import app from "../../server.js";

describe("show all blogs if are available",()=>{

    
    it("should return a status of 200 if all blogs found",async()=>{
        const response=await request(app).get("/api/getAllBlogs");
        expect(response.status).toBe(200)

    }),
    it("should return a status of 200 if single blog found",async()=>{
        const response=await request(app).get("/api/getSingleBlog/63d52f064a75ce8f39c3f9bb");
        expect(response.status).toBe(200)

    })
    
    
    it("should return a status of 200 if blog  created",async()=>{
        const response=await request(app).post("/api/createBlog");
        expect(response.status).toBe(200)

    }),
    it("should return a status of 200 if deleted",async()=>{
        const response=await request(app).delete("/api/deleteBlog/63d52f064a75ce8f39c3f9bb");
        expect(response.status).toBe(200)

    })
    
});

