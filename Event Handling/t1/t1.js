const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ulElement = document.getElementById('todo-list');

function renderTodoList() {
  ulElement.innerHTML = '';

  todoList.forEach(todoItem => {
    const todoItemElement = document.createElement('li');
    todoItemElement.className = 'todo-item';

    const checkboxId = `todo-${todoItem.id}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = todoItem.completed;
    checkbox.addEventListener('change', function () {
      todoItem.completed = this.checked;
      console.log(todoList); // Log updated todoList
    });

    const label = document.createElement('label');
    label.setAttribute('for', checkboxId);
    label.textContent = todoItem.task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', function () {
      todoList.splice(todoList.indexOf(todoItem), 1);
      renderTodoList();
      console.log(todoList); // Log updated todoList
    });

    todoItemElement.appendChild(checkbox);
    todoItemElement.appendChild(label);
    todoItemElement.appendChild(deleteBtn);

    ulElement.appendChild(todoItemElement);
  });
}

renderTodoList();

document.getElementById('add-item-btn').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'block';
});

document
  .getElementsByClassName('close')[0]
  .addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  });

window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});

document
  .getElementById('add-item-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    newTodoItem();
  });

function newTodoItem() {
  const newTask = document.getElementById('task').value.trim();
  if (newTask !== '') {
    const maxId = todoList.reduce(
      (max, todoItem) => Math.max(max, todoItem.id),
      0
    );
    const newTodoItem = {
      id: maxId + 1,
      task: newTask,
      completed: false,
    };
    todoList.push(newTodoItem);
    renderTodoList();
    console.log(todoList);
    document.getElementById('task').value = '';
    document.getElementById('modal').style.display = 'none';
  }
}
