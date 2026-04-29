const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function vetitesekListazasa(keres, valasz) {
  const vetitesek = await prisma.vetites.findMany({
    include: {
      film: true,
    },
  });

  valasz.json(vetitesek);
}

async function vetitesLetrehozasa(keres, valasz) {
  const { filmId, kezdesIdopont, terem, osszesHely } = keres.body;

  const ujVetites = await prisma.vetites.create({
    data: {
      filmId: Number(filmId),
      kezdesIdopont: new Date(kezdesIdopont),
      terem,
      osszesHely: Number(osszesHely),
    },
  });

  valasz.status(201).json(ujVetites);
}

module.exports = {
  vetitesekListazasa,
  vetitesLetrehozasa,
};