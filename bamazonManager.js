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
            if(err) throw err;

            if(user.choice === "View Products for Sale") {
                var t = new Table;
                res.forEach(function(product) {
                    t.cell("Item ID", product.item_id);
                    t.cell("Product Name", product.product_name);
                    t.cell("Price", product.price);
                    t.cell("Quantity", product.stock_quantity);
                    t.newRow();
                });
                var newT = t.toString().toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
                console.log(newT);
            }else if(user.choice === "View Low Inventory") {
                var lowInv = [];
                for(var i=0;i < res.length;i++){
                    if(res[i].stock_quantity < 5){
                        lowInv.push(res[i]);
                    }
                }
                var t = new Table;
                    lowInv.forEach(function(product) {
                        t.cell("Item ID", product.item_id);
                        t.cell("Product Name", product.product_name);
                        t.cell("Quantity", product.stock_quantity);
                        t.newRow();
                    var newT = t.toString().toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
                    console.log(newT);
                    })
            }else if(user.choice === "Add to Inventory") {
                addInv(res);
            }else if(user.choice === "Add New Product") {
                addItem();
            }
        });
    })
}
function addInv(val) {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter in the item ID of the product:",
            name: "item"
        },
        {
            type: "input", 
            message: "Number of units to add:",
            name: "amount"
        }
    ]).then(function(user) {
        var newQuantity = parseInt(val[user.item - 1].stock_quantity) +  parseInt(user.amount);
        connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?", 
        [newQuantity, user.item], function(err, res) {
            console.log("Inventory added!\nItem ID: " + user.item + "\nProduct Name: " + val[user.item - 1].product_name 
            + "\nQuantity: " + newQuantity);
        });
    })
};

function addItem(val) {
    inquirer.prompt([
        {
            type: "input",
            message: "Name of new item:",
            name: "name"
        },
        {
            type: "input",
            message: "Department:",
            name: "department"
        },
        {
            type: "input",
            message: "Price:",
            name: "price"
        },
        {
            type: "input",
            message: "Quantity:",
            name: "quantity"
        }
    ]).then(function(user) {
        connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?)", 
        [user.name, user.department, parseInt(user.price), parseInt(user.quantity)], function(err, res) {
            console.log("Item added!")
        })
    })
}
