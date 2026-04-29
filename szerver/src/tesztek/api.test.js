// Alap API tesztek a filmek és vetítések listázásának ellenőrzésére.
const request = require("supertest");
const alkalmazas = require("../alkalmazas");

describe("API végpontok tesztelése", () => {
  test("GET /api/filmek visszaadja a filmek listáját", async () => {
    const valasz = await request(alkalmazas).get("/api/filmek");

    expect(valasz.statusCode).toBe(200);
    expect(Array.isArray(valasz.body)).toBe(true);
  });

  test("GET /api/vetitesek visszaadja a vetítések listáját", async () => {
    const valasz = await request(alkalmazas).get("/api/vetitesek");

    expect(valasz.statusCode).toBe(200);
    expect(Array.isArray(valasz.body)).toBe(true);
  });
});