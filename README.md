# Mozijegy Foglaló Webalkalmazás
## 🛠️ Telepítés és futtatás

### Backend indítása

```bash
cd szerver
npm install
npx prisma generate
npm run dev
```

A backend elérhető:

- http://localhost:3000
- http://localhost:3000/api/filmek

---

### Frontend indítása

A frontend külön telepítést nem igényel.

Nyisd meg böngészőben:

```txt
kliens/index.html
```

Fontos: a backendnek futnia kell a frontend használata közben.

---

## 🎬 Használat

1. A weboldalon megjelennek a filmek és vetítések.
2. A kívánt vetítésnél nézd meg a **Vetítés ID** értéket.
3. A **Jegyfoglalás** űrlapon add meg:
   - felhasználó azonosító
   - vetítés azonosító
   - helyek száma
4. Kattints a **Foglalás elküldése** gombra.
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
