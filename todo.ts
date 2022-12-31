// todo.ts

class Todo {
  text: string;
  completed: boolean;

  constructor(text: string) {
    this.text = text;
    this.completed = false;
  }
}

class TodoList {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

const todoList = new TodoList();

function addTodo() {
  const input = document.querySelector('#todo-input') as HTMLInputElement;
  const todoText = input.value;
  input.value = '';
  todoList.addTodo(new Todo(todoText));
  renderTodos();
}

function toggleCompleted(index: number) {
  todoList.todos[index].completed = !todoList.todos[index].completed;
  renderTodos();
}

function removeTodo(index: number) {
  todoList.removeTodo(index);
  renderTodos();
}

function renderTodos() {
  const todoListElement = document.querySelector('#todo-list') as HTMLDivElement;
  todoListElement.innerHTML = '';
  todoList.todos.forEach((todo, index) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    if (todo.completed) {
      todoElement.classList.add('completed');
    }
    todoElement.innerHTML = `
      <input type="checkbox" onclick="toggleCompleted(${index})" ${todo.completed ? 'checked' : ''}>
      <span>${todo.text}</span>
      <button onclick="removeTodo(${index})">x</button>
    `;
    todoListElement.appendChild(todoElement);
  });
}

