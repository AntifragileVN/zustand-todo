import { Response, Request } from 'express';
import TodoService from '../services/todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodo(_: Request, res: Response): Promise<void>;
    getTodoById(req: Request, res: Response): Promise<void>;
    createTodo(req: Request, res: Response): Promise<void>;
    deleteTodo(req: Request, res: Response): Promise<void>;
    updateTodo(req: Request, res: Response): Promise<void>;
}
declare const todoController: TodoController;
export default todoController;
