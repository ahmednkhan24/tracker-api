const isObjectEmpty = obj => {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
};

const doesQueryParamExist = (queryParam) => {
    return queryParam === undefined;
};

module.exports =  {
    isObjectEmpty,
    doesQueryParamExist
};
