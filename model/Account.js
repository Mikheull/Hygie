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


    async updateAccount_gen(id, gender, height, weight, blood_group) {
        return this.db.query("UPDATE users SET gender = ?, height = ?, weight = ?, blood_group = ? WHERE ID = ?", [gender, height, weight, blood_group, id])
            .then(([rows]) => {
                return true;
            })
            .catch(err => {
                console.error(err);
                return false;
            });
    }

    async updateAccount_pass(id, password) {
        return this.db.query("UPDATE users SET password = ? WHERE ID = ?", [password, id])
            .then(([rows]) => {
                return true;
            })
            .catch(err => {
                console.error(err);
                return false;
            });
    }

    async updateAccount_main(id, first_name, lastname, mail, telephone, adress, birdthay) {
        return this.db.query("UPDATE users SET first_name = ?, last_name = ?, mail = ?, telephone = ?, adress = ?, birdthay = ? WHERE ID = ?", [first_name, lastname, mail, telephone, adress, birdthay, id])
            .then(([rows]) => {
                return true;
            })
            .catch(err => {
                console.error(err);
                return false;
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