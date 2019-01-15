CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
)
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("headphones", "electronics", 20, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("phone charger", "electronics", 15, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("laundry basket", "home", 10, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("basketball", "outdoor", 20, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("hairbrush", "beauty", 12, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("body wash", "beauty", 5, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("shampoo", "beauty", 10, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("pillow", "home", 20, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("toothbrush", "beauty", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("socks", "clothing", 7, 8);