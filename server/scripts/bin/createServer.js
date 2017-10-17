const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const path = require('path');
const logger = require('koa-logger')
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const createDBConnection = require('./createDBConnection');
const router = new Router();
const app = new Koa();
const createApis = require('./createApi');
const createPassport = require('../auth/createPassport');

module.exports.createServer = async () => {
    const connection = await createDBConnection();
    module.exports.connection = connection;
    const passport = await createPassport(connection);
    module.exports.passport = passport;
    const PUBLIC_PATH = path.resolve(__dirname, '../../public/dist');
    app.keys = ['some secret hurr'];
    app
        .use(logger())
        .use(serve(PUBLIC_PATH))
        .use(bodyParser())
        .use(session(app))
        .use(passport.initialize())
        .use(passport.session())
        .use(router.routes())
        .use(router.allowedMethods());

    createApis(router);
    return app;
};
