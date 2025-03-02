// ui.js
export function renderTodos(todos, todoListElement) {
    todoListElement.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        li.innerHTML = `
            <div>
                <span class="badge bg-info text-dark">${todo.date}</span>
                ${todo.text}
            </div>
            <div>
                <button class="btn btn-success btn-sm" onclick="editTodo(${index})">
                    <i class="fa fa-pencil-square-o"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteTodo(${index})">
                    <i class="fa fa-trash"></i>      
                </button>
            </div>
        `;
        todoListElement.appendChild(li);
    });
}

export function clearInput(inputElement) {
    inputElement.value = '';
}