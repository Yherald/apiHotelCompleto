const {Pool} = require('pg');


const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'PERla014',
  database: 'reservaHotel'
});

module.exports = pool
