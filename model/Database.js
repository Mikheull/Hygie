const mysql = require('mysql2');

export default () => {
    return mysql.createPool({
        host: '188.166.3.111',
        user: 'admin_hygie',
        password: '7MQvNyz3pc',
        database: 'admin_hygie',
    }).promise();
};