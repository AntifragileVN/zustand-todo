"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoSchema = exports.createTodoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createTodoSchema = joi_1.default.object({
    title: joi_1.default.string().max(150).required(),
    description: joi_1.default.string().allow('').max(400).optional(),
    isCompleted: joi_1.default.boolean().optional(),
    isPrivate: joi_1.default.boolean().optional(),
});
exports.updateTodoSchema = joi_1.default.object({
    title: joi_1.default.string().max(150).optional(),
    description: joi_1.default.string().allow('').max(400).optional(),
    isCompleted: joi_1.default.boolean().optional(),
    isPrivate: joi_1.default.boolean().optional(),
});
//# sourceMappingURL=todo.validator.js.map