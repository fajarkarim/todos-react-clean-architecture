/**
 * Business App logic of todos app
 */

import { Todos, TodoItem } from "../entities";

export class TodosInteractors {
  todos: Todos;

  constructor() {
    this.todos = new Todos();
  }

  create(content: string) {
    if (this.todos.list.length >= 4) {
      throw new Error("Max Todos is 4");
    }

    this.todos.create(content);
  }

  readAll(): Array<TodoItem> {
    return this.todos.readAll();
  }

  readOne(id: number): TodoItem {
    return this.todos.readOne(id);
  }

  update(id: number, newValue: string) {
    if (newValue === "fajar ganteng") {
      throw new Error("Duh mantap gan");
    }

    this.todos.update(id, newValue);
  }

  remove(id: number) {
    this.todos.remove(id);
  }
}
