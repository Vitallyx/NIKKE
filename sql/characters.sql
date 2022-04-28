DROP DATABASE IF EXISTS db_characters;

CREATE DATABASE IF NOT EXISTS db_characters;

USE db_characters;

CREATE TABLE characters
(
character_id INT,
character_name VARCHAR(50) NOT NULL,
character_thumbnail VARCHAR(50) NOT NULL,
character_rarity VARCHAR(50) NOT NULL,
character_weapon VARCHAR(50),
character_faction VARCHAR(50) NOT NULL,
character_squad VARCHAR(50),
character_description VARCHAR(252),
character_cv VARCHAR(50),
PRIMARY KEY (character_id)
);
