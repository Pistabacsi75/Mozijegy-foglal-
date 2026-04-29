const express = require("express");

const {
  regisztracio,
  bejelentkezes,
} = require("../vezerlok/authVezerlo");

const utvonal = express.Router();

utvonal.post("/regisztracio", regisztracio);
utvonal.post("/bejelentkezes", bejelentkezes);

module.exports = utvonal;