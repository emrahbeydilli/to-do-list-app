import { loadTodos, saveTodos } from './storage.js';
import { renderTodos } from "./ui.js";
import { getDate } from "./date.js";


const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');

let todos = loadTodos();  // Yerel depolama ile görevleri yükle

// Görev ekleme
const addTodo = () => {
    const todoText = todoInput.value.trim();

    if (!todoText) {
        alert("Lütfen bir görev girin!");
        return;
    }
    const newTodo = { text: todoText, date: getDate() };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos, todoList);  // Listeyi yeniden render et
    todoInput.value = "";  // Giriş alanını temizle
}

// Görev silme
document.addEventListener('deleteTodo', ({ detail: index }) => {
    todos.splice(index, 1);  // Silme işlemi
    saveTodos(todos);  // Güncellenmiş listeyi sakla
    renderTodos(todos, todoList);  // Listeyi yeniden render et
});

// Görev düzeltme
document.addEventListener('editTodo', ({ detail: index }) => {
    todos.splice(index, 1);  // Silme işlemi
    saveTodos(todos);  // Güncellenmiş listeyi sakla
    renderTodos(todos, todoList);  // Listeyi yeniden render et
});

// Sayfa yüklendiğinde görevleri listele
document.addEventListener("DOMContentLoaded",() => renderTodos(todos, todoList));

// Buton tıklama ile görev ekleme
addButton.addEventListener('click', addTodo);

// Klavye ile Enter tuşu ile görev ekleme
todoInput.addEventListener("keypress",(e) => e.key === "Enter" && addTodo());