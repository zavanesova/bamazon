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
* Customer: node bamazonCustomer.js
  * When the app is run, it shows customers a list of the current products offered and their prices, retrieved from the MySQL database.
  ![ScreenShot](/screenshots/1.png)
  * It then prompts the customer with two messages, asking the item and quantity the user would like to purchase.
  ![ScreenShot](/screenshots/2.png)
  * Once the customer has entered in this information, the app will check the MySQL database to ensure there is enough quantity to support this transaction. If there is not, the app will notify the customer. Otherwise, the app will proceed with the transaction.
  ![ScreenShot](/screenshots/3.png)
  ![ScreenShot](/screenshots/4.png)
  * The MySQL database is then updated to reflect the new quantity on hand. 
  ![ScreenShot](/screenshots/5.png)

* Manger: node bamazonManager.js
 * When the app is run, there are four options for the user to choose from: View Products for Sale, View Low Inventory, Add to Inventory, Add New Product.
 ![ScreenShot](/screenshots/6.png)
  * View Products for Sale: This shows the user a table of the current products and their details.
  ![ScreenShot](/screenshots/7.png)
  * View Low Inventory: This shows the user the current products with an inventory level below five.
  ![ScreenShot](/screenshots/8.png)
  * Add to Inventory: This allows the user to add inventory of a specific item. This is then updated in the MySQL database.
  ![ScreenShot](/screenshots/9.png)
  * Add New Product: The user will enter in data regarding the new item, this item is then added to the MySQL database and is available for the customer to purchase. 
  ![ScreenShot](/screenshots/10.png)
  ![ScreenShot](/screenshots/11.png)
