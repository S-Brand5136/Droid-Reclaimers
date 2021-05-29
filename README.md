# LHL Node Skeleton

## Project Setup

The following steps are only for _one_ of the group members to perform.

1. Create your own copy of this repo using the `Use This Template` button, ideally using the name of your project. The repo should be marked Public
2. Verify that the skeleton code now shows up in your repo on GitHub, you should be automatically redirected
3. Clone your copy of the repo to your dev machine
4. Add your team members as collaborators to the project so that they can push to this repo
5. Let your team members know the repo URL so that they use the same repo (they should _not_ create a copy/fork of this repo since that will add additional workflow complexity to the project)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples.
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - It runs through each of the files, in order, and executes them against the database.
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x

---

// Potential Names

- Jawa Droid buy and Sell
- Droid Reclaimers

- Salavage new and used

- Premise
- An app where you can put different types of things up for sale. You can pick a specific niche of items to sell for the app (a cars site, a shoes site, etc). This lets buyers find the items they are looking for quickly, and easily contact sellers.

**_ USER STORIES _**

// Users

- As a user I want to be able to see featured droids on the homepage

- As a user I want to filter possible droids by price

- As a user I want to be able to favourite droids to check up on them later

- As a user I want to send messages to the user that is listing that item

- As a user I want to be able to see listings I've responded too

// Admins

- As an Admin I want to be able to list droids to be seen by users

- As an Admin I want to be able to remove droids from the site

- as an Admin I want to be able to mark droids as sold

- As an Admin I want to be able to message via app, email or text back on negotiations in buying the bounty

**_ ERD _**

- _Tables_

Users |

- id SERIAL PRIMARY KEY NOT NULL
- avatar_url VARCHAR(255) DEFAULT something_url
- name VARCHAR(255) NOT NULL
- password VARCHAR(255) NOT NULL
- email VARCHAR(255) NOT NULL
- mobile_phone VARCHAR(255)
- is_admin BOOLEAN DEFAULT FALSE
- created_at DATE NOT NULL DEFAULT NOW()

Droids |

- id SERIAL PRIMARY KEY NOT NULL
- FK sellers_id REFERECES users(id) ON DELETE CASCADE
- name VARCHAR(255) NOT NULL
- description TEXT NOT NULL
- price INTEGER DEFAULT 0
- manufacturer VARCHAR(255) NOT NULL
- model VARCHAR(255) NOT NULL

images |

- id SERIAL PRIMARY KEY NOT NULL
- FK droids_id REFERECES droids(id) ON DELETE CASCADE
- is_primary BOOLEAN DEFAULT TRUE
- avatar_url VARCHAR(255) DEFAULT something_url

Favourites |

- id SERIAL PRIMARY KEY NOT NULL
- FK droids_id REFERECES droids(id) ON DELETE CASCADE
- FK users_id REFERECES users(id) ON DELETE CASCADE

Purchases |

- id SERIAL PRIMARY KEY NOT NULL
- FK droids_id REFERECES droids(id) ON DELETE CASCADE
- FK buyer_id REFERECES users(id) ON DELETE CASCADE
- FK sellers_id REFERECES users(id) ON DELETE CASCADE
- sold_price INTEGER NOT NULL
- sold_on DATE NOT NULL

Featured Table |

- id SERIAL PRIMARY KEY NOT NULL
- FK droids_id REFERECES droids(id) ON DELETE CASCADE
- start_date DATE
- end_date DATE

**_ ROUTES _**

/users

/droids
/droids/:id

get(api/droids)
post(api/droids)
get(api/droids/:id)
put(api/droids/:id)
delete(api/droids/:id)

/favourites
get(api/favourites)
post(api/favourites)
delete(api/favourites/:id)

/register
/login
/logout
