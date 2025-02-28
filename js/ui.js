const editTodoElement = (index) => {
    const event = new CustomEvent('editTodo', { detail: index });
    document.dispatchEvent(event);
}

const deleteTodoElement = (index) => {
    const event = new CustomEvent('deleteTodo', { detail: index });
    document.dispatchEvent(event);
}

const createButtonElement = (faCode,bsCode,buttonType,index) => {
    const button = document.createElement("button");
    button.setAttribute("class",bsCode);
    const i = document.createElement("i");
    i.setAttribute("class",faCode);
    button.appendChild(i);
    buttonType === "edit" ? button.onclick = () => editTodoElement(index) : button.onclick = () => deleteTodoElement(index);

    return button;
}

const createBadgeElement = (date,bsCode) => {
    const span = document.createElement("span");
    span.setAttribute("class",`badge ${bsCode}`);
    span.textContent = date;

    return span;
}

const createListElement = (todo,index) => {
    const li = document.createElement('li');
    li.setAttribute("class","list-group-item d-flex justify-content-between align-items-center");
    
    //div1 
    const div1 = document.createElement('div');
    const span = createBadgeElement(todo.date,"bg-info text-dark me-1");
    div1.textContent = todo.text;
    div1.insertBefore(span,div1.firstChild);

    li.appendChild(div1);

    // div2
    const div2 = document.createElement("div");
    const editButton = createButtonElement("fa fa-pencil-square-o","btn btn-success btn-sm","edit",index);
    div2.appendChild(editButton);
    const deleteButton = createButtonElement("fa fa-trash","btn btn-danger btn-sm ms-1","delete",index);
    div2.appendChild(deleteButton);

    li.appendChild(div2);
    
    return li;
}


export const renderTodos = (todos,todolist) => {
    todolist.innerHTML = "";
    todos.forEach((todo,index) => {
        const todoElement = createListElement(todo,index);
        todolist.appendChild(todoElement);
    });
}