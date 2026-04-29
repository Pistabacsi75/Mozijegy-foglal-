require("dotenv").config();

const alkalmazas = require("./alkalmazas");

const PORT = process.env.PORT || 3000;

alkalmazas.listen(PORT, () => {
  console.log(`Szerver fut ezen a porton: ${PORT}`);
});