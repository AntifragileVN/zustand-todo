"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tryCatch_middleware_1 = require("../../middlewares/tryCatch.middleware");
const todo_controller_1 = __importDefault(require("../../controllers/todo.controller"));
const validateBody_middleware_1 = require("../../middlewares/validateBody.middleware");
const todo_validator_1 = require("../../validators/todo.validator");
const isExist_1 = require("../../middlewares/isExist");
const models_enum_1 = require("../../types/models.enum");
const todosRouter = (0, express_1.Router)();
todosRouter.get('/all', (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.getAllTodo.bind(todo_controller_1.default)));
todosRouter.get('/:id', (0, isExist_1.isExist)(models_enum_1.Models.Todo), (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.getTodoById.bind(todo_controller_1.default)));
todosRouter.post('/', (0, validateBody_middleware_1.validateBody)(todo_validator_1.createTodoSchema), (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.createTodo.bind(todo_controller_1.default)));
todosRouter.delete('/:id', (0, isExist_1.isExist)(models_enum_1.Models.Todo), (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.deleteTodo.bind(todo_controller_1.default)));
todosRouter.put('/:id', (0, isExist_1.isExist)(models_enum_1.Models.Todo), (0, validateBody_middleware_1.validateBody)(todo_validator_1.updateTodoSchema), (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.updateTodo.bind(todo_controller_1.default)));
exports.default = todosRouter;
//# sourceMappingURL=todos.route.js.map