export declare class TodoItem {
    id: number;
    value: string;
    constructor(id: number, value: string);
}
export declare class Todos {
    list: Array<TodoItem>;
    constructor();
    create(content: string): void;
    update(id: number, newValue: string): void;
    readOne(id: number): TodoItem;
    readAll(): Array<TodoItem>;
    remove(id: number): void;
}
