// todo.ts
var Todo = /** @class */ (function () {
    function Todo(text) {
        this.text = text;
        this.completed = false;
    }
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoList.prototype.removeTodo = function (index) {
        this.todos.splice(index, 1);
    };
    return TodoList;
}());
var todoList = new TodoList();
function addTodo() {
    var input = document.querySelector('#todo-input');
    var todoText = input.value;
    input.value = '';
    todoList.addTodo(new Todo(todoText));
    renderTodos();
}
function toggleCompleted(index) {
    todoList.todos[index].completed = !todoList.todos[index].completed;
    renderTodos();
}
function removeTodo(index) {
    todoList.removeTodo(index);
    renderTodos();
}
function renderTodos() {
    var todoListElement = document.querySelector('#todo-list');
    todoListElement.innerHTML = '';
    todoList.todos.forEach(function (todo, index) {
        var todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        if (todo.completed) {
            todoElement.classList.add('completed');
        }
        todoElement.innerHTML = "\n      <input type=\"checkbox\" onclick=\"toggleCompleted(".concat(index, ")\" ").concat(todo.completed ? 'checked' : '', ">\n      <span>").concat(todo.text, "</span>\n      <button onclick=\"removeTodo(").concat(index, ")\">x</button>\n    ");
        todoListElement.appendChild(todoElement);
    });
}
