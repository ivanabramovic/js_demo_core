const config = require("../config/config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

async function initialize() {
  const { HOST, PORT, USER, PASSWORD, DATABASE } = config.database;
  const connection = await mysql.CreateConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXIST \` ${database}\`;`);
}
