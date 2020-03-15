export default (errorCode) => {
  switch (errorCode) {
    case 400:
      return { status: 400, errorCode: 'ANK-2' };
    case 403:
      return { status: 403, errorCode: 'ANK-1' };
    default:
      return { status: 404, errorCcde: 'ANK-0' };
  }
};

/*
    404: not found
    403: forbidden, duplicate user in db
    400: bad request, request is missing mandatory field

*/
