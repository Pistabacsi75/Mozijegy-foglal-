const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function foglalasLetrehozasa(keres, valasz) {
  const { felhasznaloId, vetitesId, helyekSzama } = keres.body;

  const ujFoglalas = await prisma.foglalas.create({
    data: {
      felhasznaloId: Number(felhasznaloId),
      vetitesId: Number(vetitesId),
      helyekSzama: Number(helyekSzama),
    },
  });

  valasz.status(201).json(ujFoglalas);
}

async function foglalasokListazasa(keres, valasz) {
  const foglalasok = await prisma.foglalas.findMany({
    include: {
      felhasznalo: true,
      vetites: {
        include: {
          film: true,
        },
      },
    },
  });

  valasz.json(foglalasok);
}

module.exports = {
  foglalasLetrehozasa,
  foglalasokListazasa,
};