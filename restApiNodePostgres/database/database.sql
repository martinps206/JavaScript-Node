CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);


INSERT INTO users (name, email) 
VALUES ('Martin Paliza', 'martin@email.com'),
        ('Erika Cabarcas', 'erika@email.com');
