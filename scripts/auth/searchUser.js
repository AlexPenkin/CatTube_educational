module.exports = (username, connection) => new Promise(async (resolve, reject) => {
    await connection.query(`SELECT * FROM users WHERE username = '${username}'`, ((error, results) => {
        if (error) {
            reject(error);
        }
        resolve(results[0]);
    }));
    connection.end();
});

