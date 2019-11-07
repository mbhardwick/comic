CREATE DATABASE comics_db;
USE comics_db;

CREATE TABLE comics 
(
	id INT NOT NULL AUTO_INCREMENT,
    author VARCHAR(255) NOT NULL,
    comic_title VARCHAR(255) NOT NULL,
    publisher VARCHAR(255) NOT NULL,
 PRIMARY KEY (ID)
);