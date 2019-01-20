var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("easy-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    inquirer.prompt([
        {
            type: "list",
            message: "Options:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
            name: "choice"
        }
    ]).then(function(user) {
        connection.query("SELECT * FROM products", function(err, res) {
            if(user.choice === "View Products for Sale") {
                
            }
        });
    })
}