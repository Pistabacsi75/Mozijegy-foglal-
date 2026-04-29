const express = require("express");

const {
  foglalasLetrehozasa,
  foglalasokListazasa,
} = require("../vezerlok/foglalasVezerlo");

const utvonal = express.Router();

utvonal.get("/", foglalasokListazasa);
utvonal.post("/", foglalasLetrehozasa);

module.exports = utvonal;
