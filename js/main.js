var todoText = document.getElementById('todoText');
var addToDoButton = document.getElementById('addToDoButton');
var todoContent = document.getElementById('todoContent');

var todos = sessionStorage.getItem('todos') || [];

addToDoButton.onclick = () => {
let text = todoText.value;
if(text != ''){
    addTodo(text)
}
attachEventListernersToTodoItem();
}


const attachEventListernersToTodoItem = () => {

    let todocheckedboxes = document.querySelectorAll('input[type=checkbox]')

    todocheckedboxes.forEach((todoItem, index) =>{

        todoItem.onchange = () => {
            todos[index].completed = !todos[index].completed
            sessionStorage.setItem('todos', JSON.stringify(todos))
        }

    })
}


const addTodo = (text) => {
    todos.push({
        id: todos.length + 1,
        userId: 2,
        title: todoText.value,
        completed: false
    })
    sessionStorage.setItem('todos', JSON.stringify(todos))
    displayTodos(); 
}

const displayTodos = () => {
    let htmlStr = '<ul class="list-group">';

    for (let task of todos){
        htmlStr += `<li class="list-group-item">`
        htmlStr += `<input class="form-check-input me-1" type="checkbox" ${task.completed ? 'checked' : ''} >`
        htmlStr += `<label class="form-check-label" >${task.title}</label>`
        htmlStr += `</li>`
    }
    htmlStr += '</ul>';
    todoText.value = '';
    todoContent.innerHTML = htmlStr;
}