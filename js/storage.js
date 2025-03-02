// storage.js
import { getDate } from "./utils/date.js";

export const loadTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export const deleteTodo = (index) => {
    const todos = loadTodos();
    todos.splice(index, 1);
    saveTodos(todos);
}

export const updateTodo = (index, updatedTodo) => {
    const todos = loadTodos();
    todos[index] = {
        text: updatedTodo,
        date: getDate()
    };
    saveTodos(todos);
}

export const addTodo = (todo) => {
    const todos = loadTodos();
    const newTodo = {
        text: todo,
        date: getDate()
    }
    todos.push(newTodo);
    saveTodos(todos);
}
