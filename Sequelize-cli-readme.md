To initialize a database on your local machine run these commands:

npx sequelize-cli init <--- this will initialize the sequelize-cli 

If the init fails, try this command:

npx sequelize-cli init --force (this will override your config.json)

Next, edit your config.json with your local db credentials.

Then, run this command to migrate:

npx sequelize-cli db:migrate

This will migrate all tables from models to your db.

Finally use this:

npx sequelize-cli db:seed:all

This will migrate the seeds to the tables. Currently only the encounters table has data.

You can undo migrations with this command:

npx sequelize-cli db:seed:undo:all