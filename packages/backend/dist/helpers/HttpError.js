"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
const defaultMessages = {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    408: 'Request Timeout',
    409: 'Conflict',
};
const HttpError = (status, message = defaultMessages[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
};
exports.HttpError = HttpError;
//# sourceMappingURL=HttpError.js.map