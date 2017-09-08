const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const {decrypt} = require('../crypt/makeHash');
const searchUser = require('./searchUser');

module.exports = connection => new Promise(async (resolve) => {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            searchUser('username', username, connection).then(async (user) => {
                if (username === user.username && password === await decrypt(user.password)) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            }).catch(err => console.log(err));
        }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        let user;
        let error;
        try {
            user = await searchUser('id', id, connection);
        } catch (err) {
            error = err;
        }
        done(error, user);
    });
    resolve(passport);
});
