import Database from './Database';
let querystring = require('querystring');

class Auth {

    constructor() {
        this.db = new Database();
    }

    async isLogged(req) {
        if(!req.cookies.logged) return false;
        return true
    }


    async mailExist(email) {
        return this.db.query("SELECT * FROM users WHERE mail = ? AND enable = 1", [email])
        .then(([rows]) => {
            return true;
        })
        .catch(err => {
            return false;
        });
    }


    async register(firstname, lastname, email, password) {
        return this.db.query("INSERT INTO users (first_name, last_name, mail, password) VALUES (?, ?, ?, ?)", [lastname, firstname, email, password])
            .then(([rows]) => {
                return rows.insertId;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }


    async login(email, password) {
        return this.db.query("SELECT * FROM users WHERE mail = ? AND password = ? AND enable = 1", [email, password])
        .then(([rows]) => {
            return true;
        })
        .catch(err => {
            return false;
        });
    }
    
}


module.exports = Auth;