# Hygie ![Issues](https://img.shields.io/github/issues/Mikheull/Hygie) ![GitHub last commit](https://img.shields.io/github/last-commit/Mikheull/Hygie)

This is an app to dispatch people in hospital
<br>
*This project was done in school (4th year)*

## Installation

Use `git clone` to install this app.

```bash
git clone https://github.com/Mikheull/Hygie.git
npm install
```

Import the database [(here)](https://github.com/Mikheull/Hygie/blob/master/uploads/admin_hygie.sql)

Create `.env` file in root folder and write next lines :
```
SQL_HOST=localhost
SQL_USER=root
SQL_PWD=root
SQL_TABLE=hygie
URI=http://localhost:3030/
```

## Usage

```bash
npm run start
```
The app will be run on port 3000
