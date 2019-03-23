"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo(content) {
        var pattern = new RegExp("[a-zA-Z]", "gi");
        var contentPassed = pattern.test(content);
        var isNull = content === null;
        if (!isNull)
            throw new Error("Todo Item should no be null");
        if (!contentPassed)
            throw new Error("Todo Item should be just alphabet");
        this.content = content;
    }
    return Todo;
}());
exports.Todo = Todo;
