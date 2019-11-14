import Database from './Database';

class Conversation {

    constructor() {
        this.db = new Database();
    }

    async listConvs(userID) {

        return this.db.query("SELECT * FROM conversations WHERE user_id = ? AND enable = 1", [userID])
            .then(([rows]) => {
                return (rows.length == 0) ? [] : rows;
            })
            .catch(err => {
                console.log(err);
                return [];
            });
        
    }


    async getConv(convID) {

        return this.db.query("SELECT * FROM conversations WHERE ID = ? AND enable = 1", [convID])
            .then(([rows]) => {
                return (rows.length == 0) ? [] : rows[0];
            })
            .catch(err => {
                console.log(err);
                return [];
            });
        
    }


    async createConv(id, question) {
        return this.db.query("INSERT INTO conversations (title, user_id) VALUES (?, ?)", [question, id])
            .then(([rows]) => {
                return rows.insertId;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }


    async getMessages(convID) {

        return this.db.query("SELECT * FROM conv_messages WHERE conv_id = ? AND enable = 1", [convID])
            .then(([rows]) => {
                return (rows.length == 0) ? [] : rows;
            })
            .catch(err => {
                console.log(err);
                return [];
            });
        
    }


    async insertMessage(id, convID, content) {
        return this.db.query("INSERT INTO conv_messages (conv_id, user_id, content) VALUES (?, ?, ?)", [convID, id, content])
            .then(([rows]) => {
                return rows.insertId;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }

    

    
}


module.exports = Conversation;