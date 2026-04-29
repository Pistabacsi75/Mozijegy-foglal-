const express = require("express");

const {
  vetitesekListazasa,
  vetitesLetrehozasa,
} = require("../vezerlok/vetitesVezerlo");

const utvonal = express.Router();

utvonal.get("/", vetitesekListazasa);
utvonal.post("/", vetitesLetrehozasa);

module.exports = utvonal;
