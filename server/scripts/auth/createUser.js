

module.exports = (values, connection) => new Promise(async (resolve, reject) => {
    await connection.query(`INSERT INTO users (username, email, password) VALUES ('${values.username}', '${values.email}', '${values.password}')`, ((error, results) => {
        if (error) {
            reject(error);
            return;
        }
        resolve(Object.assign({}, results[0]));
    }));
});
