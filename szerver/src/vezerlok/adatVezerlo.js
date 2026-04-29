const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function kezdoadatokLetrehozasa(keres, valasz) {
  const film = await prisma.film.create({
    data: {
      cim: "A nagy kaland",
      leiras: "Egy izgalmas kalandfilm.",
      hosszPerc: 120,
      kepUrl: "https://via.placeholder.com/300x450",
      vetitesek: {
        create: [
          {
            kezdesIdopont: new Date("2026-05-01T18:00:00"),
            terem: "1-es terem",
            osszesHely: 80,
          },
          {
            kezdesIdopont: new Date("2026-05-01T20:30:00"),
            terem: "2-es terem",
            osszesHely: 100,
          },
        ],
      },
    },
  });

  valasz.json({ uzenet: "Kezdőadatok létrehozva", film });
}

module.exports = {
  kezdoadatokLetrehozasa,
};