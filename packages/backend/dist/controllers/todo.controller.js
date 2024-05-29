"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_service_1 = __importDefault(require("../services/todo.service"));
class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getAllTodo(_, res) {
        const todos = await this.todoService.findAll();
        res.status(200).json(todos);
    }
    async getTodoById(req, res) {
        const { id } = req.params;
        const todo = await this.todoService.findTodoById(id);
        res.status(200).json(todo);
    }
    async createTodo(req, res) {
        const data = req.body;
        const todo = await this.todoService.createTodo(data);
        res.status(201).json(todo);
    }
    async deleteTodo(req, res) {
        const { id } = req.params;
        const todo = await this.todoService.deleteTodo(id);
        res.status(200).json(todo);
    }
    async updateTodo(req, res) {
        const { id } = req.params;
        const data = req.body;
        const todo = await this.todoService.updateTodo(id, data);
        res.status(200).json(todo);
    }
}
exports.TodoController = TodoController;
const todoController = new TodoController(new todo_service_1.default());
exports.default = todoController;
//# sourceMappingURL=todo.controller.js.map