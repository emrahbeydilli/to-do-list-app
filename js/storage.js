// storage.js
import { getDate } from "./utils/date.js";
export function loadTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function deleteTodo(index) {
    const todos = loadTodos();
    todos.splice(index, 1);
    saveTodos(todos);
}

export function updateTodo(index, newTodo) {
    const todos = loadTodos();
    todos[index] = newTodo;
    saveTodos(todos);
}

export function addTodo(todo) {
    const todos = loadTodos();
    const newTodo = {
        text: todo,
        date: getDate()
    }
    todos.push(newTodo);
    saveTodos(todos);
}
