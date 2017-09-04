const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const send = require('koa-send');
const succsessResponse = require('./scripts/succsessResponse');
const router = new Router();
const app = new Koa();

app.use(serve(__dirname + '/public'));

app
    .use(router.routes())
    .use(router.allowedMethods());

router.get('/login', async (ctx, next) => {
    await send(ctx, '/public/pages/login.html');
});

router.post('/login', async (ctx, next) => {
    const additionalParams = {
        add: 'pararm',
        one: 1
    };
    ctx.status = 200;
    ctx.type = 'json';
    ctx.body = succsessResponse(additionalParams);
    // await send(ctx, '/public/pages/login.html');
});

app.listen(80);