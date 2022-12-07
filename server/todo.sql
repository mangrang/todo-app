show databases;
use kdt;

CREATE TABLE todo (
     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
     title VARCHAR(100) NOT NULL,
     done TINYINT(1) NOT NULL DEFAULT 0
);

DROP TABLE todo;

INSERT INTO todo (title, done) VALUES ('sean todo1', 0);
INSERT INTO todo (title, done) VALUES ('sean todo2', 1);
INSERT INTO todo (title, done) VALUES ('sean todo3', 0);
INSERT INTO todo (title, done) VALUES ('sean todo4', 1);
INSERT INTO todo (title, done) VALUES ('sean todo5', 1);
INSERT INTO todo (title, done) VALUES ('sean todo6', 0);

DESC todo;
DELETE FROM todo WHERE id >= 0;
SELECT * FROM todo; 