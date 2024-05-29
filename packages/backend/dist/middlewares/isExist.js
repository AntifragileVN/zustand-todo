"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExist = void 0;
const HttpError_1 = require("../helpers/HttpError");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const isExist = (model) => {
    return async (req, _, next) => {
        try {
            const { id } = req.params;
            const result = await prisma[model].findUnique({
                where: {
                    id,
                },
            });
            if (!result) {
                next((0, HttpError_1.HttpError)(404, `There is no item with such id in ${model} table`));
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.isExist = isExist;
//# sourceMappingURL=isExist.js.map