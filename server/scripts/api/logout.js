module.exports.default = (router) => {
    router.get('/logout', async (ctx) => {
        ctx.set('Cache-Control', 'public');
        ctx.status = 200;
        ctx.logout();
    });
};
