const makeError = (name, message) => {
    const error = new Error();
    error.name = name;
    error.message = message;
    return error;
};

export default makeError;
