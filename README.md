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
---

## API dokumentáció

A backend alapértelmezett címe:

```txt
http://localhost:3000
```

Az API alapútvonala:

```txt
http://localhost:3000/api
```

---

### Filmek listázása

Lekéri az adatbázisban szereplő filmeket a hozzájuk tartozó vetítésekkel együtt.

**Metódus:**

```http
GET /api/filmek
```

**Példa teljes URL:**

```txt
http://localhost:3000/api/filmek
```

**Sikeres válasz példa:**

```json
[
  {
    "id": 1,
    "cim": "Mátrix",
    "leiras": "Sci-fi akciófilm.",
    "hosszPerc": 136,
    "kepUrl": "kepek/2.jpg",
    "letrehozva": "2026-04-29T10:00:00.000Z",
    "vetitesek": []
  }
]
```

---

### Film létrehozása

Új film létrehozása az adatbázisban.

**Metódus:**

```http
POST /api/filmek
```

**Példa teljes URL:**

```txt
http://localhost:3000/api/filmek
```

**Kérés törzse:**

```json
{
  "cim": "Mátrix",
  "leiras": "Sci-fi akciófilm.",
  "hosszPerc": 136,
  "kepUrl": "kepek/2.jpg"
}
```

**Mezők:**

| Mező | Típus | Kötelező | Leírás |
|---|---|---:|---|
| `cim` | string | igen | A film címe |
| `leiras` | string | igen | A film rövid leírása |
| `hosszPerc` | number | igen | A film hossza percben |
| `kepUrl` | string | nem | A film képének útvonala |

**Sikeres válasz példa:**

```json
{
  "id": 1,
  "cim": "Mátrix",
  "leiras": "Sci-fi akciófilm.",
  "hosszPerc": 136,
  "kepUrl": "kepek/2.jpg",
  "letrehozva": "2026-04-29T10:00:00.000Z"
}
```

---

### Vetítések listázása

Lekéri az összes vetítést, a kapcsolódó film adataival együtt.

**Metódus:**

```http
GET /api/vetitesek
```

**Példa teljes URL:**

```txt
http://localhost:3000/api/vetitesek
```

**Sikeres válasz példa:**

```json
[
  {
    "id": 1,
    "filmId": 1,
    "kezdesIdopont": "2026-05-01T18:00:00.000Z",
    "terem": "1-es terem",
    "osszesHely": 80,
    "letrehozva": "2026-04-29T10:00:00.000Z",
    "film": {
      "id": 1,
      "cim": "Mátrix",
      "leiras": "Sci-fi akciófilm.",
      "hosszPerc": 136,
      "kepUrl": "kepek/2.jpg",
      "letrehozva": "2026-04-29T10:00:00.000Z"
    }
  }
]
```

---

### Vetítés létrehozása

Új vetítés létrehozása egy meglévő filmhez.

**Metódus:**

```http
POST /api/vetitesek
```

**Példa teljes URL:**

```txt
http://localhost:3000/api/vetitesek
```

**Kérés törzse:**

```json
{
  "filmId": 1,
  "kezdesIdopont": "2026-05-01T18:00:00",
  "terem": "1-es terem",
  "osszesHely": 80
}
```

**Mezők:**

| Mező | Típus | Kötelező | Leírás |
|---|---|---:|---|
| `filmId` | number | igen | Annak a filmnek az azonosítója, amelyhez a vetítés tartozik |
| `kezdesIdopont` | string | igen | A vetítés kezdési időpontja |
| `terem` | string | igen | A moziterem neve |
| `osszesHely` | number | igen | A vetítésre elérhető összes hely száma |

**Sikeres válasz példa:**

```json
{
  "id": 1,
  "filmId": 1,
  "kezdesIdopont": "2026-05-01T18:00:00.000Z",
  "terem": "1-es terem",
  "osszesHely": 80,
  "letrehozva": "2026-04-29T10:00:00.000Z"
}
```

---

### Foglalások listázása

Lekéri az összes foglalást a kapcsolódó felhasználóval, vetítéssel és filmmel együtt.

**Metódus:**

```http
GET /api/foglalasok
```

**Példa teljes URL:**

```txt
http://localhost:3000/api/foglalasok
```

**Sikeres válasz példa:**

```json
[
  {
    "id": 1,
    "felhasznaloId": 1,
    "vetitesId": 1,
    "helyekSzama": 2,
    "letrehozva": "2026-04-29T10:00:00.000Z",
    "felhasznalo": {
      "id": 1,
      "nev": "Teszt Elek",
      "email": "teszt@example.com",
      "jelszoHash": "...",
      "szerepkor": "FELHASZNALO",
      "letrehozva": "2026-04-29T10:00:00.000Z"
    },
    "vetites": {
      "id": 1,
      "filmId": 1,
      "kezdesIdopont": "2026-05-01T18:00:00.000Z",
      "terem": "1-es terem",
      "osszesHely": 80,
      "letrehozva": "2026-04-29T10:00:00.000Z",
      "film": {
        "id": 1,
        "cim": "Mátrix",
        "leiras": "Sci-fi akciófilm.",
        "hosszPerc": 136,
        "kepUrl": "kepek/2.jpg",
        "letrehozva": "2026-04-29T10:00:00.000Z"
      }
    }
  }
]
```

---

### Foglalás létrehozása

Új jegyfoglalás létrehozása egy meglévő felhasználóhoz és vetítéshez.

**Metódus:**

```http
POST /api/foglalasok
```

**Példa teljes URL:**

```txt
http://localhost:3000/api/foglalasok
```

**Kérés törzse:**

```json
{
  "felhasznaloId": 1,
  "vetitesId": 1,
  "helyekSzama": 2
}
```

**Mezők:**

| Mező | Típus | Kötelező | Leírás |
|---|---|---:|---|
| `felhasznaloId` | number | igen | A foglalást végző felhasználó azonosítója |
| `vetitesId` | number | igen | A kiválasztott vetítés azonosítója |
| `helyekSzama` | number | igen | A lefoglalt jegyek száma |

**Sikeres válasz példa:**

```json
{
  "id": 1,
  "felhasznaloId": 1,
  "vetitesId": 1,
  "helyekSzama": 2,
  "letrehozva": "2026-04-29T10:00:00.000Z"
}
```

---

### Regisztráció

Új felhasználó létrehozása.

**Metódus:**

```http
POST /api/auth/regisztracio
```

**Példa teljes URL:**

```txt
http://localhost:3000/api/auth/regisztracio
```

**Kérés törzse:**

```json
{
  "nev": "Teszt Elek",
  "email": "teszt@example.com",
  "jelszo": "123456"
}
```

**Mezők:**

| Mező | Típus | Kötelező | Leírás |
|---|---|---:|---|
| `nev` | string | igen | A felhasználó neve |
| `email` | string | igen | A felhasználó e-mail címe |
| `jelszo` | string | igen | A felhasználó jelszava |

**Sikeres válasz példa:**

```json
{
  "uzenet": "Sikeres regisztráció.",
  "felhasznalo": {
    "id": 1,
    "nev": "Teszt Elek",
    "email": "teszt@example.com"
  }
}
```

---

### Bejelentkezés

Felhasználó bejelentkeztetése. Sikeres bejelentkezés esetén JWT tokent ad vissza.

**Metódus:**

```http
POST /api/auth/bejelentkezes
```

**Példa teljes URL:**

```txt
http://localhost:3000/api/auth/bejelentkezes
```

**Kérés törzse:**

```json
{
  "email": "teszt@example.com",
  "jelszo": "123456"
}
```

**Mezők:**

| Mező | Típus | Kötelező | Leírás |
|---|---|---:|---|
| `email` | string | igen | A felhasználó e-mail címe |
| `jelszo` | string | igen | A felhasználó jelszava |

**Sikeres válasz példa:**

```json
{
  "uzenet": "Sikeres bejelentkezés.",
  "token": "jwt-token",
  "felhasznalo": {
    "id": 1,
    "nev": "Teszt Elek",
    "email": "teszt@example.com",
    "szerepkor": "FELHASZNALO"
  }
}
```

---

## API végpontok összefoglaló táblázata

| Funkció | Metódus | Végpont |
|---|---:|---|
| Filmek listázása | GET | `/api/filmek` |
| Film létrehozása | POST | `/api/filmek` |
| Vetítések listázása | GET | `/api/vetitesek` |
| Vetítés létrehozása | POST | `/api/vetitesek` |
| Foglalások listázása | GET | `/api/foglalasok` |
| Foglalás létrehozása | POST | `/api/foglalasok` |
| Regisztráció | POST | `/api/auth/regisztracio` |
| Bejelentkezés | POST | `/api/auth/bejelentkezes` |
