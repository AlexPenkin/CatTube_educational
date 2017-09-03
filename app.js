const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const send = require('koa-send');
const router = new Router();
const app = new Koa();

app.use(serve(__dirname + '/public'));

app
    .use(router.routes())
    .use(router.allowedMethods());

router.get('/login', async function (ctx, next) {
    await send(ctx, '/public/pages/login.html');
});

app.listen(3000);