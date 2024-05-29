import { TodoCreateDto, TodoUpdateDto } from '../types/todos.type';
import { Todo } from '@prisma/client';
export default class TodoService {
    findAll(): Promise<Todo[]>;
    findTodoById(id: string): Promise<Todo | null>;
    createTodo(data: TodoCreateDto): Promise<Todo>;
    deleteTodo(id: string): Promise<Todo>;
    updateTodo(id: string, data: TodoUpdateDto): Promise<Todo>;
}
