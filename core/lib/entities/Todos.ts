class TodoItem {
  id: number;
  value: string;

  constructor(id: number, value: string) {
    this.id = id;
    this.value = value;
  }
}

export class Todos {
  todos: Array<TodoItem>;

  constructor() {
    this.todos = [];
  }

  create(content: string) {
    const currentId = this.todos.length + 1;
    const newId = currentId + 1;
    let newContent = new TodoItem(newId, content);
    this.todos.push(newContent);
    return this.todos;
  }

  update(id: number, newValue: string) {
    let todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) throw new Error("Todo item not found");
    this.todos[todoIndex].value = newValue;
    return this.todos;
  }

  readOne(id: number) {
    let todo = this.todos.find(todo => todo.id === id);
    return todo;
  }

  readAll() {
    return this.todos;
  }

  remove(id: number) {
    let todoIndex = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(todoIndex, 1);
    return this.todos;
  }
}
