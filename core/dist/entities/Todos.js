"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = /** @class */ (function () {
    function TodoItem(id, value) {
        this.id = id;
        this.value = value;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
var Todos = /** @class */ (function () {
    function Todos() {
        this.list = [];
    }
    Todos.prototype.create = function (content) {
        var currentId = this.list.length + 1;
        var newId = currentId + 1;
        var newContent = new TodoItem(newId, content);
        this.list.push(newContent);
    };
    Todos.prototype.update = function (id, newValue) {
        var todoIndex = this.list.findIndex(function (todo) { return todo.id === id; });
        if (todoIndex === -1)
            throw new Error("Todo item not found");
        this.list[todoIndex].value = newValue;
    };
    Todos.prototype.readOne = function (id) {
        var todo = this.list.find(function (todo) { return todo.id === id; });
        if (todo)
            return todo;
        throw new Error("Todo Item not found");
    };
    Todos.prototype.readAll = function () {
        return this.list;
    };
    Todos.prototype.remove = function (id) {
        var todoIndex = this.list.findIndex(function (todo) { return todo.id === id; });
        this.list.splice(todoIndex, 1);
    };
    return Todos;
}());
exports.Todos = Todos;
