// app.js
import { loadTodos, saveTodos, deleteTodo, updateTodo, addTodo } from './storage.js';
import { renderTodos, clearInput } from "./ui.js";

const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');

// Görevleri yükle ve listeyi render et
renderTodos(loadTodos(), todoList);

// Yeni görev ekleme
addButton.addEventListener('click', () => {
    const todo = todoInput.value.trim();
    if (todo) {
        addTodo(todo);
        renderTodos(loadTodos(), todoList);
        clearInput(todoInput);
    }
});

// Görev silme
window.deleteTodo = (index) => {
    deleteTodo(index);
    renderTodos(loadTodos(), todoList);
};


