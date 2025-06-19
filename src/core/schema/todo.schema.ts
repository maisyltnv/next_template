import { z } from 'zod';

export const todoSchema = z.object({
    id: z.number(),
    title: z.string().min(1),
    completed: z.boolean(),
    createdAt: z.string().optional(),
});

export const createTodoSchema = todoSchema.omit({ id: true, createdAt: true });

export type Todo = z.infer<typeof todoSchema>;
export type CreateTodoInput = z.infer<typeof createTodoSchema>;
