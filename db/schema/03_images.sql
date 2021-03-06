DROP TABLE IF EXISTS images CASCADE;

CREATE TABLE images (
  id SERIAL NOT NULL PRIMARY KEY,
  droids_id INTEGER NOT NULL REFERENCES droids(id) ON DELETE CASCADE,
  is_primary BOOLEAN NOT NULL,
  image_url VARCHAR(255) NOT NULL
);
