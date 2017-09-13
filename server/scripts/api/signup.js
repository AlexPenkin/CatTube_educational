const send = require('koa-send');
const path = require('path');
// const succsessResponse = require('../succsessResponse');

const VIEW = '/public/dist/index.html';

module.exports.default = (router) => {
    router.get('/signup', async (ctx) => {
        ctx.set('Cache-Control', 'public');
        ctx.status = 200;
        await send(ctx, VIEW);
    });
};
