const client = require ('./client.js')

const syncAndSeed = async() => {
  await client.connect();
}

syncAndSeed();