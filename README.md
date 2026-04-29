# Mozijegy Foglaló Webalkalmazás

## Projekt célja

Az alkalmazás egy egyszerű online mozijegy-foglaló rendszer mozik számára.

A rendszer lehetővé teszi:

- filmek megtekintését
- vetítések listázását
- jegyfoglalás létrehozását kiválasztott vetítésre

## Használt technológiák

### Kliensoldal

- HTML
- CSS
- JavaScript

### Szerveroldal

- Node.js
- Express.js
- Prisma ORM
- SQLite adatbázis
- JWT autentikáció
- Jest és Supertest teszteléshez

## Projekt felépítése

```txt
mozijegy-foglalo/
├── kliens/
│   ├── index.html
│   ├── stilus.css
│   └── alkalmazas.js
├── szerver/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── utvonalak/
│   │   ├── vezerlok/
│   │   ├── tesztek/
│   │   ├── alkalmazas.js
│   │   └── szerver.js
│   ├── .env
│   └── package.json
├── dokumentacio/
│   └── adatbazis.sql
└── README.md
## Fejlesztési megjegyzés

A projekt fejlesztése során külön kliensoldali, szerveroldali, adatbázis- és tesztelési részek készültek.