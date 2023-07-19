const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', addTodo);

function addTodo(event) {
  event.preventDefault();
  const todoText = todoInput.value;
  
  if (todoText.trim() !== '') {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
}

function createTodoItem(todoText) {
  const todoItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  const label = document.createElement('label');
  label.innerText = todoText;
  
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', deleteTodo);
  
  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  todoItem.appendChild(deleteButton);
  
  return todoItem;
}

function deleteTodo() {
  const todoItem = this.parentElement;
  todoList.removeChild(todoItem);
}
