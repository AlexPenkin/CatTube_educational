const send = require('koa-send');
const passport = require('../bin/createServer').passport;

const VIEW = '/public/dist/index.html';

module.exports.default = (router) => {
    router.get('/logout', async (ctx) => {
        ctx.set('Cache-Control', 'public');
        ctx.status = 200;
        ctx.logout();
        await send(ctx, VIEW);
    });
};
