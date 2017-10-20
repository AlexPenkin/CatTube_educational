module.exports = (by, value, connection) => new Promise(async (resolve, reject) => {
    await connection.query(`SELECT * FROM users WHERE ${by} = '${value}'`, ((error, results) => {
        if (error) {
            reject(error);
            return;
        }
        resolve(Object.assign({}, results[0]));
    }));
});

