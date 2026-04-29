const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

async function regisztracio(keres, valasz) {
  try {
    const { nev, email, jelszo } = keres.body;

    const letezoFelhasznalo = await prisma.felhasznalo.findUnique({
      where: { email },
    });

    if (letezoFelhasznalo) {
      return valasz.status(400).json({ hiba: "Ez az e-mail cím már foglalt." });
    }

    const jelszoHash = await bcrypt.hash(jelszo, 10);

    const felhasznalo = await prisma.felhasznalo.create({
      data: {
        nev,
        email,
        jelszoHash,
      },
    });

    valasz.status(201).json({
      uzenet: "Sikeres regisztráció.",
      felhasznalo: {
        id: felhasznalo.id,
        nev: felhasznalo.nev,
        email: felhasznalo.email,
      },
    });
  } catch (hiba) {
    valasz.status(500).json({ hiba: "Szerverhiba regisztráció közben." });
  }
}

async function bejelentkezes(keres, valasz) {
  try {
    const { email, jelszo } = keres.body;

    const felhasznalo = await prisma.felhasznalo.findUnique({
      where: { email },
    });

    if (!felhasznalo) {
      return valasz.status(401).json({ hiba: "Hibás e-mail vagy jelszó." });
    }

    const helyesJelszo = await bcrypt.compare(jelszo, felhasznalo.jelszoHash);

    if (!helyesJelszo) {
      return valasz.status(401).json({ hiba: "Hibás e-mail vagy jelszó." });
    }

    const token = jwt.sign(
      {
        id: felhasznalo.id,
        email: felhasznalo.email,
        szerepkor: felhasznalo.szerepkor,
      },
      process.env.JWT_TITOK,
      { expiresIn: "2h" }
    );

    valasz.json({
      uzenet: "Sikeres bejelentkezés.",
      token,
      felhasznalo: {
        id: felhasznalo.id,
        nev: felhasznalo.nev,
        email: felhasznalo.email,
        szerepkor: felhasznalo.szerepkor,
      },
    });
  } catch (hiba) {
    valasz.status(500).json({ hiba: "Szerverhiba bejelentkezés közben." });
  }
}

module.exports = {
  regisztracio,
  bejelentkezes,
};