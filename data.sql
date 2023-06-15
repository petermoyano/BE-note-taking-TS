\c notes

DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS accounts;

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    markdown VARCHAR(255) NOT NULL
);

INSERT INTO notes (title, markdown) VALUES
  ('Note 1', 'This is the first note'),
  ('Note 2', 'This is the second note'),
  ('Note 3', 'This is the third note');
