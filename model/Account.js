import Database from './Database';

class Account {

    constructor() {
        this.db = new Database();
    }

    async getInfo(id, info) {

        return this.db.query("SELECT * FROM users WHERE ID = ? AND enable = 1", [id])
            .then(([rows]) => {
                return (rows.length == 0) ? [] : rows[0][info];
            })
            .catch(err => {
                console.log(err);
                return [];
            });
        
    }


    async getUserData(id) {

        return this.db.query("SELECT * FROM users WHERE ID = ? AND enable = 1", [id])
            .then(([rows]) => {
                return (rows.length == 0) ? [] : rows[0];
            })
            .catch(err => {
                console.log(err);
                return [];
            });
        
    }


    async getUserAntecedents(id) {

        return this.db.query("SELECT * FROM antecedents WHERE user_id = ? AND enable = 1", [id])
            .then(([rows]) => {
                return (rows.length == 0) ? [] : rows;
            })
            .catch(err => {
                console.log(err);
                return [];
            });
        
    }


    async newAntecedent(id, location, date, reason) {
        return this.db.query("INSERT INTO antecedents (user_id, location, date, reason) VALUES (?, ?, ?, ?)", [id, location, date, reason])
            .then(([rows]) => {
                return rows.insertId;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }

    

    
}


module.exports = Account;