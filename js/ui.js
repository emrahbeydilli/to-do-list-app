const createButtonElement = (faCode,buttonType) => {
    const button = document.createElement("button");
    button.setAttribute("class",`btn btn-${buttonType} btn-sm`);
    const i = document.createElement("i");
    i.setAttribute("class",faCode);
    button.appendChild(i);

    return button;
}

const createTodoElement = (todoText,index) => {
    const li = document.createElement('li');
    li.setAttribute("class","list-group-item d-flex justify-content-between align-items-center");
    
    //div1 
    const div1 = document.createElement('div');
    const span = document.createElement("span");
    span.setAttribute("class","badge bg-info text-dark");
    span.textContent = new Date().getDate;
    div1.appendChild(span);
    div1.textContent = todoText;

    li.appendChild(div1);

    // div2
    const div2 = document.createElement("div");
    const button1 = createButtonElement("fa fa-pencil-square-o","success");
    div2.appendChild(button1);
    const button2 = createButtonElement("fa fa-trash","danger");
    div2.appendChild(button2);

    li.appendChild(div2);
    
    return li;
}


export const renderTodos = (todos,todolist) => {
    todolist.innerHTML = "";
    todos.forEach((todo,index) => {
        const todoElement = createTodoElement(todo.text,index);
        todolist.appendChild(todoElement);
    });
}