CREATE TABLE USERS (
		UserID int PRIMARY KEY,
		UserFullName varchar(255),
		UserPhoneNumber varchar(10)
);

CREATE TABLE TEAMS (
		TeamID int PRIMARY KEY,
		TeamName varchar(255)
);

CREATE TABLE TEAM_PER_USER (
		UserID int REFERENCES Users(UserID),
		TeamID int REFERENCES Teams(TeamID)
);

CREATE TABLE LISTS (
		ListID int PRIMARY KEY,
		TeamID int REFERENCES TEAMS(TeamID),
		ListCreator int REFERENCES USERS(UserID),
		ListPurchaseDate date,
		PurchaseLocation varchar(255)
);

CREATE TABLE PRODUCTS (
		ProductID int PRIMARY KEY,
		ProductName varchar(255),
		ProductAuthor int REFERENCES USERS(UserID),
		ListID int REFERENCES LISTS(ListID)
);