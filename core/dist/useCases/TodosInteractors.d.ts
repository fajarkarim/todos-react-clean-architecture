/**
 * Business App logic of todos app
 */
import { Todos, TodoItem } from "../entities";
export declare class TodosInteractors {
    todos: Todos;
    constructor();
    create(content: string): void;
    readAll(): Array<TodoItem>;
    readOne(id: number): TodoItem;
    update(id: number, newValue: string): void;
    remove(id: number): void;
}
