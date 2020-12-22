-- add username example (user_name, user_phone)
INSERT INTO USERS (UserFullName, UserPhoneNumber) VALUES ('YUVAL', '0507484858');

-- add list example (team_id, creator_id, purchase_date, purchase_location)
INSERT INTO LISTS (TeamID, ListCreator, ListPurchaseDate, PurchaseLocation) VALUES (1, 1, '11/11/1111', "shekem");

-- add team example (team_name);
INSERT INTO TEAMS (TeamName) VALUES ("kaki");

-- add team_per_user example (user_id, team_id)
INSERT INTO TEAM_PER_USER VALUES (1, 1);

-- add product example (product_name, product_author, list_id)
INSERT INTO PRODUCTS (ProductName, ProductAuthor, ListID) VALUES ("BAMBI", 1, 1);

-- return 1 if the phone number exists, else return 0
SELECT COUNT(1)
FROM USERS
WHERE UserPhoneNumber = "phone_number_value"

-- select user details by phone number
SELECT *
FROM USERS
WHERE UserPhoneNumber = "phone_number_value"

-- select teams by user_id
SELECT TeamName
FROM TEAMS
WHERE TeamID in (SELECT TeamID
		 FROM TEAM_PER_USER
		 WHERE UserID = "user_id_value");
				 
-- select lists by team_id
SELECT *
FROM LISTS
WHERE TeamID = "team_id_value"

-- select products by list_id
SELECT *
FROM PRODUCTS
WHERE ListID = "list_id_value"
