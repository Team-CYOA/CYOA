To initialize a database on your local machine run these commands:

npx sequelize-cli init <--- this will initialize the sequelize-cli 

If the init fails, try this command:

npx sequelize-cli init --force (this will override your config.json)


**WARNING: THIS COMMAND WILL CAUSE YOUR MODELS, SEEDERS, AND MIGRATIONS TO BE DELETED. IN MOST CASES, DROPPING YOUR DB AND RUNNING THE BELOW MIGRATION AND SEED COMMANDS WILL BE SUFFICIENT TO BRING YOUR DB UP TO DATE!**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Standard Migration Commands***

First, edit your config.json with your local db credentials.

** Reset Your Database **

Next, run these commands to drop and create your DB:

npx sequelize-cli db:drop (this drops the DB specified in your config file)

npx sequelize-cli db:create (this creates the DB specified in your config file)

Then, run this command to migrate:

npx sequelize-cli db:migrate

This will migrate all tables from models to your db.

Finally use this:

npx sequelize-cli db:seed:all

This will migrate the seeds to the tables. Currently only the encounters table has data.

To add specific seeds to your db (if you only want to update one table) run this command:

npx sequelize-cli db:seed --seed <<<20210225164230-activeChars>>>

Inside the arrows put the name of the seeder- just the numbers, hyphen, and table name, leave off the .js.

You can edit data in the seeders however you want if you'd like to add more characters/events. 

You can undo migrations with this command:

npx sequelize-cli db:seed:undo:all