const isObject = (obj) => obj !== null && typeof obj === 'object' && !Array.isArray(obj);

module.exports = isObject;