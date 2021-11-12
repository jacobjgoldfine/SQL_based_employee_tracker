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
    return this.connection.query("INSERT INTO department (name) VALUES (?)", newDept);
  }
  addRole(newRoleDept, newRoleName, newRoleSal) {
    return this.connection.query(
      "INSERT INTO role (dept_id, title, salary) VALUES (?)",
      (newRoleDept, newRoleName, newRoleSal)
    );
  }
  addEmployee(newEmployee) {
    return this.connection.query(
      "INSERT INTO employee (role_id, first_name, last_name, manager_id) VALUES (?)",
      newEmployee
    );
  }
  // updateEmployees(updateEmployee) {
  //   return this.connection.query("UPDATE ");
  // }
}

module.exports = EmployeeDatabase;
