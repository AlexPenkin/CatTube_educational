const crypto = require('crypto');

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || '42343311565613321144556641123321'; // Must be 256 bytes (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16

function encrypt(text) {
    return new Promise((resolve) => {
        const iv = crypto.randomBytes(IV_LENGTH);
        const cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        resolve(`${iv.toString('hex')}:${encrypted.toString('hex')}`);
    });
}

function decrypt(text) {
    return new Promise((resolve) => {
        const textParts = text.split(':');
        const iv = new Buffer(textParts.shift(), 'hex');
        const encryptedText = new Buffer(textParts.join(':'), 'hex');
        const decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        resolve(decrypted.toString());
    });
}

module.exports = {
    decrypt,
    encrypt
};
