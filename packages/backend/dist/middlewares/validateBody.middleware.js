"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const HttpError_1 = require("../helpers/HttpError");
const validateBody = (schema) => {
    return async (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const { details } = error;
            const message = details.map((i) => i.message).join(',');
            next((0, HttpError_1.HttpError)(400, message));
            return;
        }
        next();
    };
};
exports.validateBody = validateBody;
//# sourceMappingURL=validateBody.middleware.js.map