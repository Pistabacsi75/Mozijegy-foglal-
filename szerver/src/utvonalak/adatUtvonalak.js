const express = require("express");

const { kezdoadatokLetrehozasa } = require("../vezerlok/adatVezerlo");

const utvonal = express.Router();

utvonal.post("/kezdo", kezdoadatokLetrehozasa);

module.exports = utvonal;