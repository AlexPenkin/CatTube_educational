module.exports = async () => {
    const Koa = require('koa');
    const serve = require('koa-static');
    const compress = require('koa-compress');
    const Router = require('koa-router');
    const createApis = require('./createApi');
    const path = require('path');
    const router = new Router();
    const app = new Koa();
    const PUBLIC_PATH = path.resolve(__dirname, '../../public');

    app
        .use(serve(PUBLIC_PATH))
        .use(compress({
            filter() {
                return true;
            },
            threshold: 1500,
            flush: require('zlib').Gzip
        }))
        .use(router.routes())
        .use(router.allowedMethods());

    createApis(router);

    return app;
};
