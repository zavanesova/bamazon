# Bamazon

## Purpose
* This app allows a user/customer to buy items from a list of products.
* This app allows a manager to manage inventory levels by viewing current product details, adding stock of current products, or adding new products to their store.

## Technologies Used
* This app was built with:
  * Javascript
  * Node
  * Express
  * MySQL
  * Inquirer
  * Easy-Table
  
## How It Works
* Customer:
  * When the app is run, it shows customers a list of the current products offered and their prices, retrieved from the MySQL database.
  
  * It then prompts the customer with two messages, asking the item and quantity the user would like to purchase.
  
  * Once the customer has entered in this information, the app will check the MySQL database to ensure there is enough quantity to support this transaction. If there is not, the app will notify the customer. Otherwise, the app will proceed with the transaction.
  * The MySQL database is then updated to reflect the new quantity on hand. 
