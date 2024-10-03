document.getElementById('addTodoBtn').addEventListener('click', addTodo);
document.getElementById('deleteAllBtn').addEventListener('click', deleteAllTodos);

var todoInput = document.getElementById('todoInput');
todoInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
   
    var todoText = todoInput.value;

    if (todoText === '') {
        alert('Please enter a todo');
        return;
    }

    var li = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = todoText;

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'editBtn';
    editBtn.addEventListener('click', () => editTodo(span));

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.addEventListener('click', () => deleteTodo(li));

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById('todoList').appendChild(li);

    todoInput.value = ''; 
}

function editTodo(span) {
    var newText = prompt('Edit your todo:', span.textContent);
    if (newText !== null) {
        span.textContent = newText;
    }
}

function deleteTodo(li) {
    li.remove();
}

function deleteAllTodos() {
    var todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
}