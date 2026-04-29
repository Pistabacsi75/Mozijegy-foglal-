const express = require("express");

const {
  filmekListazasa,
  filmLetrehozasa,
} = require("../vezerlok/filmVezerlo");

const utvonal = express.Router();

utvonal.get("/", filmekListazasa);
utvonal.post("/", filmLetrehozasa);

module.exports = utvonal;