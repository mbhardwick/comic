CREATE DATABASE comics_db;
USE comics_db;

CREATE TABLE comics 
(
	id INT NOT NULL AUTO_INCREMENT,
    comic_title VARCHAR(255) NOT NULL,
    saved BOOLEAN DEFAULT false,
    PRIMARY KEY (ID)
);