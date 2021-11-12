//quierries
const connection = require("./connect");

class EmployeeDatabase {
  constructor() {
    this.connection = connection;
  }
  viewDept() {
    return this.connection.query("SELECT * FROM department");
  }
  viewRoles() {
    return this.connection.query("SELECT * FROM role");
  }
  viewEmployees() {
    return this.connection.query("SELECT * FROM employee");
  }
  addDept(newDept) {
    return this.connection.query("INSERT INTO department (name) VALUES ?", newDept);
  }
  addRole(newRole) {
    return this.connection.query("INSERT INTO role (dept_id, title, salary) VALUES ?", newRole);
  }
  addEmployee(newEmployee) {
    return this.connection.query("INSERT INTO employees (role_id, first_name, last_name, manager_id) VALUES ?", newEmployee);
  }
  updateEmployees(updateEmployee) {
    return this.connection.query("UPDATE ");
  }
}

module.exports = EmployeeDatabase;
