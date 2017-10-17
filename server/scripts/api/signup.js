const send = require('koa-send');
const path = require('path');
const connection = require('../bin/createServer').connection;
const createUser = require('../auth/createUser');
const {
    encrypt
} = require('../crypt/makeHash');

const VIEW = '/public/dist/index.html';

module.exports.default = (router) => {
    router.get('/signup', async(ctx) => {
        ctx.set('Cache-Control', 'public');
        ctx.status = 200;
        await send(ctx, VIEW);
    });

    router.post('/signup', async(ctx) => {
        ctx.body = ctx.request.body;
        const {
            username,
            password,
            email
        } = ctx.body;
        const enctyptedPassword = await encrypt(password);
        try {
            const result = await createUser({
                username,
                password: enctyptedPassword,
                email
            }, connection);
        } catch (error) {
            ctx.status = 400;
            if (error.errno === 1062) {
                ctx.body = {
                    message: 'Username already taken'
                };
            } else {
                ctx.body = {
                    message: error.message
                }
            }
        }
    });
}