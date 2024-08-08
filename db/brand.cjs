const client = require('./client.cjs');

const createBrand = async(name) => {
  try{
    await client.query (`
      INSERT INTO brand (name)
      VALUES ('${name}');
    `);
  }catch (err){
    console.log(err);
  }
}

module.exports = {createBrand}