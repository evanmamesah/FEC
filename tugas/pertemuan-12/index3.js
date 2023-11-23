// index.js
const ambilDataUserAsync = require('./ambilDataUserAsync');

async function main() {
  try {
    const userData = await ambilDataUserAsync();
    console.log('Data user:', userData);
  } catch (error) {
    console.error('Gagal mengambil data user:', error);
  }
}

main();
