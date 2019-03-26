"use strict";
/**
 * Business App logic of todos app
 */
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("../entities");
var TodosInteractors = /** @class */ (function () {
    function TodosInteractors() {
        this.todos = new entities_1.Todos();
    }
    TodosInteractors.prototype.create = function (content) {
        if (this.todos.list.length >= 4) {
            throw new Error("Max Todos is 4");
        }
        this.todos.create(content);
    };
    TodosInteractors.prototype.readAll = function () {
        return this.todos.readAll();
    };
    TodosInteractors.prototype.readOne = function (id) {
        return this.todos.readOne(id);
    };
    TodosInteractors.prototype.update = function (id, newValue) {
        if (newValue === "fajar ganteng") {
            throw new Error("Duh mantap gan");
        }
        this.todos.update(id, newValue);
    };
    TodosInteractors.prototype.remove = function (id) {
        this.todos.remove(id);
    };
    return TodosInteractors;
}());
exports.TodosInteractors = TodosInteractors;
