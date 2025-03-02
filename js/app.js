// app.js
import { loadTodos, deleteTodo, updateTodo, addTodo } from './storage.js';
import { renderTodos, clearInput } from "./ui.js";

const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');
const editInput = document.getElementById('edit-input');
const saveEditButton = document.getElementById('save-edit-button');
const modal = new bootstrap.Modal(document.getElementById('edit-modal'));

// Başlangıç editing index değeri
let editingIndex = null;


const addButtonClick = () => {
    const todo = todoInput.value.trim();
    if (todo) {
        addTodo(todo);
        renderTodos(loadTodos(), todoList);
        clearInput(todoInput);
    }
}

// Yeni görev ekleme
addButton.addEventListener('click',addButtonClick);
todoInput.addEventListener("keypress",(e) => e.key === "Enter" && addButtonClick());

// Görev silme
window.deleteTodo = (index) => {
    deleteTodo(index);
    renderTodos(loadTodos(), todoList);
};

// Görev Silme
window.editTodo = (index) => {
    editingIndex = index;
    const todo = loadTodos()[index];
    editInput.value = todo.text;
}


// Görevleri yükle ve listeyi render et
document.addEventListener("DOMContentLoaded",() => {
    renderTodos(loadTodos(), todoList);
})

// Modaldaki "Kaydet" butonuna tıklama işlemi
saveEditButton.addEventListener("click",() => {
    const modalInput = editInput.value;
    if (modalInput) {
        updateTodo(editingIndex,modalInput);
        renderTodos(loadTodos(),todoList);
        modal.hide();
    }
});