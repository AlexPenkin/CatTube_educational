const send = require('koa-send');
const path = require('path');
const succsessResponse = require('../succsessResponse');

const VIEW = path.resolve(__dirname, '/public/pages/login.html');

module.exports.default = (router) => {
    router.get('/login', async (ctx, next) => {
        await send(ctx, VIEW);
        next();
    });

    router.post('/login', async (ctx, next) => {
        const additionalParams = {
            add: 'pararm',
            one: 1
        };
        ctx.status = 200;
        ctx.type = 'json';
        ctx.body = succsessResponse(additionalParams);
        next();
    });
};
