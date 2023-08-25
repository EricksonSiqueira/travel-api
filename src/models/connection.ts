import mysql from 'mysql2/promise';

console.log({
  host: process.env.MYSQL_HOST || 'localhost',
  port: +process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: 'traveldb',
});

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: +(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: 'traveldb',
});

export default connection;
