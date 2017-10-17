const send = require('koa-send');
const path = require('path');
const passport = require('../bin/createServer').passport;

module.exports.default = (router) => {
    router.post('/auth', (ctx) => {
        if (ctx.state.user) {
            ctx.status = 200;
            ctx.body = {
                username: ctx.state.user.username,
                message: 'Success'
            }
        } else {
            ctx.status = 401;
            ctx.body = {
                message: 'Not autorized'
            }
        }
    });
};