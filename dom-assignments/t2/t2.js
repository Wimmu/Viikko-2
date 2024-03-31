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

const ulElement = document.querySelector('ul');

todoList.forEach(todoItem => {
  const liElement = document.createElement('li');

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = `todo-${todoItem.id}`;
  if (todoItem.completed) {
    inputElement.checked = true;
  }

  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', `todo-${todoItem.id}`);
  labelElement.textContent = todoItem.task;

  liElement.appendChild(inputElement);
  liElement.appendChild(labelElement);

  ulElement.appendChild(liElement);
});
