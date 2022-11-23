CREATE TABLE Users(
  id_user INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(16) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(32) NOT NULL,
  roles ENUM('user', 'dataEntry', 'admin')
);

CREATE TABLE UsersDetails(
  id_users_details INT PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(32) NOT NULL,
  secondname VARCHAR(32) NULL,
  lastname VARCHAR(32) NOT NULL,
  secondlastname VARCHAR(32) NULL,
  document_number INT(10) NOT NULL,
  id_user INT NOT NULL UNIQUE,
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

CREATE TABLE DocumentType(
  id_document_type INT PRIMARY KEY AUTO_INCREMENT,
  name_document_type ENUM('dni', 'pasaporte' ) NOT NULL,
  document_number INT(10) NOT NULL,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

CREATE TABLE Phone(
  id_phone INT PRIMARY KEY AUTO_INCREMENT,
  phone_number bigint(15) NOT NULL,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

CREATE TABLE Address(
  id_address INT PRIMARY KEY AUTO_INCREMENT,
  address_line1 VARCHAR(45) NOT NULL,
  address_line2 VARCHAR(45) NOT NULL,
  city VARCHAR(45) NOT NULL,
  municipality VARCHAR(45) NOT NULL,
  state VARCHAR(45) NOT NULL,
  country VARCHAR(45) NOT NULL,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

CREATE TABLE sales(
  id_sale INT PRIMARY KEY AUTO_INCREMENT,
  sale_date DATETIME NOT NULL,
  sale_total_amount FLOAT NOT NULL,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

CREATE TABLE categories(
  id_category INT PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(45) NOT NULL
);

CREATE TABLE products(
  id_product INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  product_creation_date DATETIME,
  product_price FLOAT,
  product_quantity INT,
  product_description VARCHAR(500),
  product_image_url VARCHAR(45),
  id_category INT,
  FOREIGN KEY (id_category) REFERENCES categories(id_category)
);

CREATE TABLE sales_details(
  id_sale_detail INT PRIMARY KEY AUTO_INCREMENT,
  id_sale INT,
  id_product INT,
  product_quantity INT,
  FOREIGN KEY (id_sale) REFERENCES sales(id_sale),
  FOREIGN KEY (id_product) REFERENCES products(id_product)
);