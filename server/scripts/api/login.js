const send = require('koa-send');
const path = require('path');
const passport = require('../bin/createServer').passport;

const VIEW = '/public/dist/index.html';

module.exports.default = (router) => {
    router.get('/login', async(ctx) => {
        ctx.set('Cache-Control', 'public');
        ctx.logout();
        await send(ctx, VIEW);
    });

    router.post('/login', (ctx) => {
        if (!ctx.state.user) {
            return passport.authenticate('local', (err, user) => {
                if (!user) {
                    ctx.status = 401;
                    ctx.body = {
                        success: false
                    };
                } else {
                    const parsedUser = {
                        username: user.username
                    };
                    ctx.body = JSON.stringify(parsedUser);
                    return ctx.login(user);
                }
                return ctx;
            })(ctx);
        } else {
            ctx.status = 200;
            ctx.body = {
                username: ctx.state.user.username,
                message: 'We have been recognize you by your tail =)'
            }
        }
    });
};