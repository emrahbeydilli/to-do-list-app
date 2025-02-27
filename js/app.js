import { loadTodos, saveTodos } from './storage.js';
import { renderTodos } from "./ui.js";


const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');

let todos = loadTodos();  // Yerel depolama ile görevleri yükle


renderTodos(todos, todoList);
