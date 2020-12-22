-- add username example (user_id, user_name, user_phone)
INSERT INTO USERS VALUES (1, 'YUVAL', '0507484858');

-- add list example (list_id, team_id, creator_id, purchase_date, purchase_location)
INSERT INTO LISTS VALUES (1, 1, 1, '11/11/1111', "shekem");

-- add team example (team_id, team_name);
INSERT INTO TEAMS VALUES (1, "yuval-kaki");

-- add team_per_user example (user_id, team_id)
INSERT INTO TEAM_PER_USER VALUES (1, 1);

-- add product example (product_id, product_name, product_author, list_id)
INSERT INTO PRODUCTS VALUES (1, "BAMBI", 1, 1);

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
