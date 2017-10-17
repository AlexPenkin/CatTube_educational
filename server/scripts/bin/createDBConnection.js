const mysql = require('mysql');
module.exports = async () => {
    const status = {
        online: false,
        error: ''
    };
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1',
        database: 'cat_tube'
    });
    const originalEnd = connection.end;
    connection.end = async () => {
        originalEnd.call(connection);
        status.online = false;
        return 'disconnected';
    };

    return new Promise((reslove) => {
        connection.connect((err) => {
            if (err) {
                status.error = err;
            } else if (connection.threadId) {
                status.online = true;
            }
            connection._status = status;
            reslove(connection);
        });
    });
};
