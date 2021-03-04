# CYOA
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
https://opensource.org/licenses/MIT

## Description

Welcome to CASTAWAY: Flight of the Pheonix. This text-based game is a science-fiction survival game based on the classic Choose Your Own Adventure stories. Stranded with your wrecked spaceship, you will have to rely on your wits and decision making to chart a course towards survival in CASTAWAY: Flight of the Pheonix!
      
## Table of Contents 
      
* [Installation](#installation)
      
* [Usage](#usage)
      
* [How it Works](#HowitWorks)

* [Contributing](#contributing)
      
* [Questions](#questions)

* [License](#license)
      
## Installation

Here are some instructions on installation.
      
## Usage

### Herokuo
To start using this application right away, simply navigate to the following link:

[heroku](heroku.com)

### Git Clone
To run this on your local PC, utlizing a local MySQL database, follow these steps:
1. Clone the repository onto your local PC.
2. Create a new schema in your MySQL database called "cyoa_db".
3. Open an integrated terminal where the data was cloned to and run "npm i".
4. Utlize the Sequelize-CLI-ReadMe file to migrate and seed your database.
5. Initiate the server.js file in your terminal
6. Load the application your browser.

## How it Works

### Express
Express is a node.js library that creates a server. It utilizes routes which are accessed via the browser for this applicaiton. There are API and HTML routes:
* API Routes: These routes deliver JSON formatted information from the database and are used in js related actions.
* HTML routes: These routes deliver an actual HTML page to the user by way of express-handlebars

### Sequelize

### Express-Handlebars
Handlebars are a tool that allows the delivery of dynamic pages to the user as well as allowing re-use of HTML 'templates'. It is possible to send user-specified information to the page, or information that is regularly updated, or conditional page elements, and even more.

### Public Assets
Public assets are defined in the express server script. These are how the HTML handlebars access front-end JS, style-sheets, and more.

### Animations

## Contributing

If you'd like to make a contribution to CASTAWAY: Flight of the Phoenix (with content, new mechanics or art etc.) make a pull request with a detailed commit description of your contribution. 
      
## Questions

For questions regarding this repo contact me at charlie.bateman117@gmail.com or visit my repository at https://github.com/Team-CYOA/CYOA

## License

Copyright 2021 undefined

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.