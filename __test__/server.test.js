'use strict';
const server = require('../src/server');
const supertest = require("supertest");
const request = supertest(server.app);

describe("API Server ", () => {
    it("getting data from home route /", async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("welcome to home page");
    });
    it("handle 404 error", async () => {
        const response = await request.get('/absefssd');
        expect(response.status).toEqual(404);
    });
    it("handle bad method error", async () => {
        const response = await request.post('/bad');
        expect(response.status).toEqual(404);
    });
    it("handle the empty name input", async () => {
        const response = await request.get('/person');
        expect(response.status).toEqual(500);
    });
    it("handle the  name input", async () => {
        const response = await request.get('/person?userName=anas');
        // console.log(response )
        expect(response.status).toEqual(200);
    });
});
