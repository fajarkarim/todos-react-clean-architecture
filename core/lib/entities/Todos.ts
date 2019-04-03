export class TodoItem {
  id: number;
  value: string;

  constructor(id: number, value: string) {
    this.id = id;
    this.value = value;
  }
}

export class Todos {
  list: Array<TodoItem>;

  constructor(items: Array<TodoItem>) {
    this.list = items;
  }

  create(content: string) {
    const currentId = this.list.length + 1;
    const newId = currentId + 1;
    let newContent = new TodoItem(newId, content);
    this.list.push(newContent);
  }

  update(id: number, newValue: string) {
    let todoIndex = this.list.findIndex(todo => todo.id === id);
    if (todoIndex === -1) throw new Error("Todo item not found");
    this.list[todoIndex].value = newValue;
  }

  readOne(id: number): TodoItem {
    let todo = this.list.find(todo => todo.id === id);
    if (todo) return todo;

    throw new Error("Todo Item not found");
  }

  readAll(): Array<TodoItem> {
    return this.list;
  }

  remove(id: number) {
    let todoIndex = this.list.findIndex(todo => todo.id === id);
    this.list.splice(todoIndex, 1);
  }
}
