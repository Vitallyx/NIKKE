USE db_characters;

DELETE FROM characters

INSERT INTO characters
	(character_id, character_name, character_thumbnail, character_rarity, character_weapon, character_faction, character_squad, character_description, character_cv)
	VALUES
	(1,'Maxine', 'images/thumbnail/Maxine.webp', 'super_super_rare', '#', 'Missilis Industry', 'Metis', 'A talented researcher who loves nothing more than machines and knowledge. As the brain of Metis, she is both perceptive, whip-smart, and capable of producing weapons in flash.', 'Sora Amamiya')
	;
	
	SELECT * FROM characters;