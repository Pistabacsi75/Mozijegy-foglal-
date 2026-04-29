const API_ALAP = "http://localhost:3000/api";

async function filmekBetoltese() {
  const valasz = await fetch(`${API_ALAP}/filmek`);
  const filmek = await valasz.json();

  const filmekLista = document.getElementById("filmekLista");
  filmekLista.innerHTML = "";

  filmek.forEach((film) => {
    const kartya = document.createElement("div");
    kartya.className = "kartya";

    kartya.innerHTML = `
      <h3>${film.cim}</h3>
      <p>${film.leiras}</p>
      <p><strong>Hossz:</strong> ${film.hosszPerc} perc</p>
    `;

    filmekLista.appendChild(kartya);
  });
}

async function vetitesekBetoltese() {
  const valasz = await fetch(`${API_ALAP}/vetitesek`);
  const vetitesek = await valasz.json();

  const vetitesekLista = document.getElementById("vetitesekLista");
  vetitesekLista.innerHTML = "";

  vetitesek.forEach((vetites) => {
    const kartya = document.createElement("div");
    kartya.className = "kartya";

    kartya.innerHTML = `
      <h3>${vetites.film.cim}</h3>
      <p><strong>Vetítés ID:</strong> ${vetites.id}</p>
      <p><strong>Időpont:</strong> ${new Date(vetites.kezdesIdopont).toLocaleString("hu-HU")}</p>
      <p><strong>Terem:</strong> ${vetites.terem}</p>
      <p><strong>Összes hely:</strong> ${vetites.osszesHely}</p>
    `;

    vetitesekLista.appendChild(kartya);
  });
}

async function foglalasKuldese(esemeny) {
  esemeny.preventDefault();

  const felhasznaloId = document.getElementById("felhasznaloId").value;
  const vetitesId = document.getElementById("vetitesId").value;
  const helyekSzama = document.getElementById("helyekSzama").value;
  const foglalasUzenet = document.getElementById("foglalasUzenet");

  const valasz = await fetch(`${API_ALAP}/foglalasok`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      felhasznaloId,
      vetitesId,
      helyekSzama,
    }),
  });

  if (valasz.ok) {
    foglalasUzenet.textContent = "Sikeres foglalás.";
  } else {
    foglalasUzenet.textContent = "Sikertelen foglalás.";
  }
}

document.getElementById("foglalasUrlap").addEventListener("submit", foglalasKuldese);

filmekBetoltese();
vetitesekBetoltese();