'use strict';
const validator = require('../src/middleware/validator');
const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('validator Test', () => {
            it('check the name', async () => {
                const response = await request.get('/person?name=sara');
                expect(response.status).toBe(200);
            });

            it('Handle not found request', async () => {
                const response = await request.post('/person?name=sara');
                expect(response.status).toEqual(500);

            });

            it('Bad method', async () => {
                const response = await request.post('/person?name=sara');
                expect(response.status).toEqual(500);
            });
        })