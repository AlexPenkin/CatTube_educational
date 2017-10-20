const fs = require('fs');
const path = require('path');
const os = require('os');
const connection = require('../bin/createServer').connection;

module.exports.default = (router) => {
    router.post('/upload', async (ctx) => {
        const file = ctx.request.body.files.file;
        const reader = fs.createReadStream(file.path);
        const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
        reader.pipe(stream);
        console.log('uploading %s -> %s', file.name, stream.path);
    });
};
