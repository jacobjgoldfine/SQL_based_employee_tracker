const mysql = require("mysql2");
const util = require("util");

const connection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Azurite",
    database: "employee_db",
  },
  console.log(`Connected to the employee database.`)
);

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;
