const supertest = require("supertest");

let request;
describe("test api", () => {
    beforeAll(() => {
        const server = require("../index");
        request = supertest.agent(server);
    });
    afterAll(() => {
        server.close();
    });

    describe("GET /ping", () => {
        it("should return status 200", async () => {
            const res = await request.get("/ping");
            expect(res.status).toBe(200);
            expect(res.headers['content-type']).toBe('application/json');
        });
    });

    describe("GET invalid route", () => {
        it("should return status 404", async () => {
            const res = await request.get("/er");
            expect(res.status).toBe(404);
            expect(res.headers['content-type']).toBe('application/json');
        });
    });

    describe("GET /", () => {
        it("should return status 200", async () => {
            const res = await request.get("/");
            expect(res.status).toBe(200);
            expect(res.headers['content-type']).toBe('application/json');
        });
    });
});