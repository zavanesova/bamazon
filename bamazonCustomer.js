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
    connection.query("SELECT * FROM products", function(err, res) {
        if(err) throw err;
        var t = new Table;
        res.forEach(function(product) {
            t.cell("Item ID", product.item_id);
            t.cell("Product Name", product.product_name);
            t.cell("Department", product.department_name);
            t.cell("Price", product.price);
            t.newRow();
        });
        var newT = t.toString().toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        console.log(newT);
        buyItems(res);
    })
}

function buyItems(val) {
    inquirer.prompt([
    {
        type: "input",
        name: "item",
        message: "Which item would you like to buy? Enter in the item ID number."
    },
    {
        type: "input",
        name: "amount",
        message: "How many would you like to buy?"
    }
]).then(function(user) {
    console.log(user.item);
    // connection.query("SELECT stock_quantity FROM products WHERE item_id= ?", [user.item], function(err, res) {
    //     console.log(res[0].stock_quantity);
    // })
    if(val[user.item - 1].stock_quantity >= user.amount) {
        var amountDue = val[user.item - 1].price * user.amount;
        console.log("Your order has been placed!\nItems: " + val[user.item - 1].product_name + "\nNumber of Items: " +
        user.amount + "\nAmount Due: $" + amountDue);
        connection.query("UPDATE products SET stock_quantity=? WHERE item_id= ?", [val[user.item - 1].stock_quantity - user.amount, user.item], function(err, res) {
            console.log("------------------------------\nDatabase Updated");
        })

    }else{
        console.log("Insufficient quantity to fulfill order.")
    }
})
}
