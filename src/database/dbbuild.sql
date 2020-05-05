BEGIN;

DROP TABLE IF EXISTS bounties CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE bounties (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    picture VARCHAR(300) NOT NULL,
    crimes VARCHAR(300) NOT NULL,
    bounty INTEGER NOT NULL,
    status VARCHAR(30) NOT NULL,
    furtherinfo VARCHAR(400) 
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(300) NOT NULL,
    admin BOOLEAN DEFAULT FALSE,
    score INTEGER NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    message VARCHAR(300) NOT NULL,
    userID VARCHAR(30) NOT NULL,
    bountyID VARCHAR(30) NOT NULL,
    dateposted DATE NOT NULL
);

INSERT INTO bounties (name, picture,crimes,bounty,status,furtherinfo) VALUES
('James', 'LINK TO PICTURE?', 'Harassing Injuns out up on the north frontier', 500, 'At Large', 'Afraid of cactii'),
('Jake', 'LINK TO PICTURE?', 'Highway robbery out by Old Acre', 1000, 'At Large', 'Often confused with James'),
('Marwan', 'LINK TO PICTURE?', 'Rustling cattle outside of Nazareth', 2000, 'At Large', 'He likes to seduce the cattle by playing sweet country music on his old acoustic guitar');

INSERT INTO users (name, username, password, admin, score) VALUES
('admin', 'admin', '$2b$10$sa/8nHXaQ5ZAOLcNtWQMbe92NFC/9xSGKadWjl..x8kUsT.bvcNHi', true, 20),
('Mario', 'supermario', 'password1', FALSE, 20),
('Luigi', 'luigiisbetter', 'password2', FALSE, 30);


INSERT INTO comments (message, userID, bountyID, dateposted) VALUES
('Well gee partner, I will take that bounty', 1, 1, '04/05/2020'),
('Oh I aint going up against that lunatic', 2, 2, '05/05/2020');


COMMIT;
