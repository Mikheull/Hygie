
[![Coverage Status](https://coveralls.io/repos/github/Mikheull/Hygie/badge.svg?branch=master)](https://coveralls.io/github/Mikheull/Hygie?branch=master)
[![Build Status](https://travis-ci.org/Mikheull/Hygie.svg?branch=master)](https://travis-ci.org/Mikheull/Hygie)


## Installation

```
$ git clone https://github.com/Mikheull/Hygie.git
```
When it's done, follow next steps.

## Quick Start

```
$ npm install
```

Import the database (here)

Create `.env` file in root folder and write next lines :
```
SQL_HOST=localhost
SQL_USER=root
SQL_PWD=root
SQL_TABLE=hygie
URI=http://localhost:3030/
```
The **SQL_HOST** is the host of your database <br>
The **SQL_USER** is the user of your database <br>
The **SQL_PWD** is the password of your database <br>
The **SQL_TABLE** is the table <br>
The **URI** is the main url <br>

```
$ npm start
```

This webapp will be run on [http://localhost:3000](http://localhost:3000)
