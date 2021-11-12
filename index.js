require("console.table");
const inquirer = require("inquirer");
const db = require("./db/queries");
const query = new db();

//put inquirer in a function, .then use a switch with functions then run the functions for each thing to drill down

const runPromts = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "mainPrompts",
        message: "What would you like to do?",
        choices: [
          "View all Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Deptarments",
          "Add Department",
          "Quit",
        ],
      },
    ])

    .then((response) => {
      const answers = response.mainPrompts;
      switch (answers) {
        case "View all Employees":
          query.viewEmployees().then((data) => {
            console.table(data);
            runPromts();
          });
          break;
        case "Add Employee":
          addEmployee();
        case "Update Employee Role":
          updateEmployeeRole();
        case "View All Roles":
          query.viewRoles().then((data) => {
            console.table(data);
            runPromts();
          });
          break;
        case "Add Role":
          addRole();
        case "View All Deptarments":
          query.viewDept().then((data) => {
            console.table(data);
            runPromts();
          });
          break;
        case "Add Department":
          addDeptarment();
        case "Quit":
          console.log("Goodbye"), process.exit();
        default:
          break;
      }
    });
};

function addDeptarment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newDept",
        message: "What is the name of the new Deptarment?",
      },
    ])
    .then((response) => {
      const newDept = `(${response.newDept})`;
      query.addDept(newDept);
      console.log("New Deptartment Added");
      runPromts();
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newRole",
        message: "What is the title of the new Role?",
      },
      {
        type: "input",
        name: "newRoleSal",
        message: "what is the new role's salaray?",
      },
      {
        type: "input",
        name: "newRoleDept",
        message: "What is the new role's department?",
      },
    ])
    .then((response) => {
      const newRole = `(${response.newRole}, ${response.newRoleSal}, ${response.newRoleDept})`;
      query.addDept(newRole);
      console.log("New Role Added");
      runPromts();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newEmployee",
        message: "What is the first name of the new Employee?",
      },
      {
        type: "input",
        name: "newEmployeeRole",
        message: "What is the ",
      },
    ])
    .then((response) => {
      const newEmployee = response;
      query.addDept(newEmployee);
      console.log("New Employee Added");
      runPromts();
    });
}

runPromts();
