const listModules = require('awilix').listModules;

module.exports = (router) => {
    const result = listModules('../api/*.js', {
        cwd: __dirname
    });
    result.forEach(
        m => require(m.path).default(router)
    );
};
