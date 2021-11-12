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
          break;
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
          break;
        case "View All Deptarments":
          query.viewDept().then((data) => {
            console.table(data);
            runPromts();
          });
          break;
        case "Add Department":
          addDeptarment();
          break;
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
      const newDept = `${response.newDept}`;
      query.addDept(newDept).then(() => {
        console.log("New Deptartment Added");
        runPromts();
      });
      // console.log("New Deptartment Added");
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newRoleName",
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
      const newRoleDept = parseInt(response.newRoleDept);
      const newRoleName = `${response.newRoleName}`;
      const newRoleSal = parseInt(response.newRoleSal);
      query.addRole(newRoleDept, newRoleName, newRoleSal).then(() => {
        console.log("New Role Added");
        runPromts();
      });
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newEmployeeFirst",
        message: "What is the first name of the new Employee?",
      },
      {
        type: "input",
        name: "newEmployeeLast",
        message: "What is the last name of the new Employee?",
      },
      {
        type: "input",
        name: "newEmployeeRole",
        message: "What is the employee's role?",
      },
      {
        type: "input",
        name: "newEmployeeManger",
        message: "Who is the new Employee's manager?",
      },
    ])
    .then((response) => {
      const newEmployee = `(${response.newEmployeeRole}, ${response.newEmployeeFirst}, ${response.newEmployeeLast}, ${response.newEmployeeManger})`;
      query.addEmployee(newEmployee).then(() => {
        console.log("New Employee Added");
        runPromts();
      });
    });
}

runPromts();
