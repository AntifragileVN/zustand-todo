import { Todo } from '@prisma/client';
export type TodoCreateDto = Omit<Todo, 'id'>;
export type TodoUpdateDto = Partial<Omit<Todo, 'id'>>;
