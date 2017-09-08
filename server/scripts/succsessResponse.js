const isObject = require('./isObject');

const succsessJSON = {
    'status': '200',
    'succsess': 'OK'
};

const succsessResponse = (params) => {
    if (params && isObject(params)) {
        const result = Object.assign({}, succsessJSON);
        return JSON.stringify(Object.assign(result, params));
    } else if (params && Array.isArray(params)) {
        let result = Object.assign({}, succsessJSON);
        for (let i = 0; i < params.length; i++) {
            result = Object.assign(result, params[i]);
        }
        return JSON.stringify(result);
    }
    return succsessJSON;
};

module.exports = succsessResponse;
