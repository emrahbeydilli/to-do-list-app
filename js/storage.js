// js/storage.js
export const loadTodos = () => {
    const todos = localStorage.getItem('todos');
    console.log(todos);
    return todos ? JSON.parse(todos) : [];
};

export const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
