"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class TodoService {
    async findAll() {
        const data = await prisma.todo.findMany();
        return data;
    }
    async findTodoById(id) {
        const data = await prisma.todo.findUnique({
            where: {
                id,
            },
        });
        return data;
    }
    async createTodo(data) {
        return await prisma.todo.create({
            data,
        });
    }
    async deleteTodo(id) {
        const deletedTodo = await prisma.todo.delete({
            where: {
                id,
            },
        });
        return deletedTodo;
    }
    async updateTodo(id, data) {
        const updatedTodo = await prisma.todo.update({
            where: {
                id,
            },
            data,
        });
        return updatedTodo;
    }
}
exports.default = TodoService;
//# sourceMappingURL=todo.service.js.map