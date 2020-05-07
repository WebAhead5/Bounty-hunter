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
    userID INTEGER NOT NULL,
    bountyID INTEGER NOT NULL,
    dateposted DATE NOT NULL
);

INSERT INTO bounties (name, picture,crimes,bounty,status,furtherinfo) VALUES
('Jittery James Daniels', 'https://i.imgur.com/eaof9WM.png', 'Harassing Injuns out up on the north frontier', 500, 'At Large', 'Afraid of cactii'),
('Snakey Jake Powis', 'https://i.imgur.com/boaJaFA.png', 'Highway robbery out by Old Acre', 1000, 'At Large', 'Often confused with James'),
('Mad-Eye Marwan Rizik', 'https://i.imgur.com/8NVpLaE.jpg', 'Rustling cattle outside of Nazareth', 2000, 'At Large', 'He likes to seduce the cattle by playing sweet country music on his old acoustic guitar'),
('Murderous Mario Saliba', 'https://i.imgur.com/3lCmjrz.jpg', 'Just all out killin'' folk all o''er Haifa', 3000, 'At Large', 'Apparently cannot wait for Ragnorak'),
('Farid "three names" Abu Salih', 'https://i.imgur.com/DFxTR6b.jpg', 'Fishing with dynamite', 600, 'At Large', 'Quiet disposition, explosive inventory'),
('Moris "The Moor" Rafol', 'https://i.imgur.com/oQnUNWM.jpg', 'Smuggling', 900, 'At Large', 'Not actually a Moor'),
('Smilin'' Mehiar Sammar', 'https://i.imgur.com/xsY22Nu.jpg', 'Kidnapping', 1200, 'At Large', 'He''ll keep on smilin that innocent smile while he quietly takes your daughters'),
('Hadi "Howitzer" Kalil', 'https://i.imgur.com/jF9wcZu.jpg', 'Armed Insurrection', 4000, 'At Large','Took out 47 souls at Fort Assumption and high-tailed it towards the Lebanese border');

INSERT INTO users (name, username, password, admin, score) VALUES
('admin', 'admin', '$2b$10$sa/8nHXaQ5ZAOLcNtWQMbe92NFC/9xSGKadWjl..x8kUsT.bvcNHi', true, 20), 
('Mario', 'supermario', '$2b$10$sa/8nHXaQ5ZAOLcNtWQMbe92NFC/9xSGKadWjl..x8kUsT.bvcNHi', FALSE, 20),
('Luigi', 'luigiisbetter', '$2b$10$sa/8nHXaQ5ZAOLcNtWQMbe92NFC/9xSGKadWjl..x8kUsT.bvcNHi', FALSE, 30),
('wyatt', 'Wyatt Earp', '$2b$10$sa/8nHXaQ5ZAOLcNtWQMbe92NFC/9xSGKadWjl..x8kUsT.bvcNHi', FALSE, 20),
('billy', 'Crazy Billy Joe', '$2b$10$sa/8nHXaQ5ZAOLcNtWQMbe92NFC/9xSGKadWjl..x8kUsT.bvcNHi', FALSE, 20),
('Reuben', 'MArshal Reuben J Cogburn', '$2b$10$sa/8nHXaQ5ZAOLcNtWQMbe92NFC/9xSGKadWjl..x8kUsT.bvcNHi', FALSE, 20),
('sam', 'Yosemite Sam', '$2b$10$sa/8nHXaQ5ZAOLcNtWQMbe92NFC/9xSGKadWjl..x8kUsT.bvcNHi', FALSE, 20);



INSERT INTO comments (message, userID, bountyID, dateposted) VALUES
('Well gee partner, I will take that bounty', 4, 1, '04/05/2020'),
('Oh I aint going up against that lunatic', 5, 2, '05/05/2020'),
('YEEEEE HAAAA!', 6, 3, '05/05/2020'),
('Wait, is that Jake or James?', 6, 2, '05/05/2020');


COMMIT;
