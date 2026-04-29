-- CreateTable
CREATE TABLE "Felhasznalo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nev" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jelszoHash" TEXT NOT NULL,
    "szerepkor" TEXT NOT NULL DEFAULT 'FELHASZNALO',
    "letrehozva" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cim" TEXT NOT NULL,
    "leiras" TEXT NOT NULL,
    "hosszPerc" INTEGER NOT NULL,
    "kepUrl" TEXT,
    "letrehozva" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Vetites" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filmId" INTEGER NOT NULL,
    "kezdesIdopont" DATETIME NOT NULL,
    "terem" TEXT NOT NULL,
    "osszesHely" INTEGER NOT NULL,
    "letrehozva" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Vetites_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Foglalas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "felhasznaloId" INTEGER NOT NULL,
    "vetitesId" INTEGER NOT NULL,
    "helyekSzama" INTEGER NOT NULL,
    "letrehozva" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Foglalas_felhasznaloId_fkey" FOREIGN KEY ("felhasznaloId") REFERENCES "Felhasznalo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Foglalas_vetitesId_fkey" FOREIGN KEY ("vetitesId") REFERENCES "Vetites" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Felhasznalo_email_key" ON "Felhasznalo"("email");
