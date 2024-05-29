"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatch = void 0;
const tryCatch = (ctrl) => {
    return async (req, res, next) => {
        try {
            await ctrl(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
};
exports.tryCatch = tryCatch;
//# sourceMappingURL=tryCatch.middleware.js.map