INSERT INTO department (name)
VALUES ("IT"),
("Accounting"),
("HR"),
("Engineering");

INSERT INTO role (dept_id, title, salary)
VALUES (1, "Technician", 45000.00),
(2, "Mathemition", 60000.00),
(3, "Director", 50000.00),
(4, "Nerd", 70000.00);

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES (4, "Bruce", "Testerson", null),
(2, "Sally", "T", 1);