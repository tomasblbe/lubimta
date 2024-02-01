
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    bio TEXT,
    country VARCHAR(2)
);

-- @block
INSERT INTO Users (email, bio, country)
VALUES ('sukel.tomas@gmail.com','omnipotent, i am the one. icarus, i touch the sky.','SR'),
    ('SLAKHS.dkudh@fflco', 'lishofaihe', 'LI')
;

-- @block
SELECT id, email, bio FROM Users
WHERE country = 'LI'
ORDER BY id ASC;

-- @block 
CREATE INDEX email_index ON Users(email);


-- @block
CREATE TABLE Rooms(
    id INT AUTO_INCREMENT,
    street VARCHAR(255),
    owner_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES Users(id)
);


-- @block

INSERT INTO Rooms (owner_id, street)
VALUES
    (1, 'sturova'),
    (1, 'okruzna'),
    (1, 'stanicna'),
    (1, 'stefanikova');