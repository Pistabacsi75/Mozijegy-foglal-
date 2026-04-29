const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function filmekListazasa(keres, valasz) {
  const filmek = await prisma.film.findMany({
    include: {
      vetitesek: true,
    },
  });

  valasz.json(filmek);
}

async function filmLetrehozasa(keres, valasz) {
  const { cim, leiras, hosszPerc, kepUrl } = keres.body;

  const ujFilm = await prisma.film.create({
    data: {
      cim,
      leiras,
      hosszPerc: Number(hosszPerc),
      kepUrl,
    },
  });

  valasz.status(201).json(ujFilm);
}

module.exports = {
  filmekListazasa,
  filmLetrehozasa,
};