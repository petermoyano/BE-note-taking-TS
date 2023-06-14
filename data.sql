DROP DATABASE IF EXISTS 'note-db';

CREATE DATABASE 'note-db';

/c note-db;

DROP TABLE IF EXISTS 'notes';

CREATE TABLE notes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  markdown VARCHAR(255) NOT NULL,
);

INSERT INTO notes (title, markdown) VALUES
  ('Note 1', 'This is the first note'),
  ('Note 2', 'This is the second note'),
  ('Note 3', 'This is the third note');
```