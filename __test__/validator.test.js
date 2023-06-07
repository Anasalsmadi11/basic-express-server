'use strict'

// const validator=require('../src/midddleware/validator')
const server= require('../src/server')
const supertest=require('supertest')
const request= supertest(server.app)

describe("testing validator ", () => {
    it("testing validator", async () => {
        const response = await request.get('/person');
        expect(response.status).toEqual(500);
        expect(typeof response.body).toEqual("object");
    })
    });