const express = require("express");
const cors = require("cors");

const filmUtvonalak = require("./utvonalak/filmUtvonalak");
const vetitesUtvonalak = require("./utvonalak/vetitesUtvonalak");
const foglalasUtvonalak = require("./utvonalak/foglalasUtvonalak");
const authUtvonalak = require("./utvonalak/authUtvonalak");

const alkalmazas = express();

alkalmazas.use(cors());
alkalmazas.use(express.json());

alkalmazas.use("/api/filmek", filmUtvonalak);
alkalmazas.use("/api/vetitesek", vetitesUtvonalak);
alkalmazas.use("/api/foglalasok", foglalasUtvonalak);
alkalmazas.use("/api/auth", authUtvonalak);

alkalmazas.get("/", (keres, valasz) => {
  valasz.json({ uzenet: "Mozijegy foglaló API működik" });
});

module.exports = alkalmazas;