DROP DATABASE IF EXISTS db_characters;

CREATE DATABASE
IF NOT EXISTS db_characters;

USE db_characters;

CREATE TABLE characters
(
    character_id INT,
    character_name VARCHAR(50) NOT NULL,
    character_rarity INT NOT NULL,
    PRIMARY KEY (character_id)
);
