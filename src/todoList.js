let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
const getTodoList = () => todoList;
const saveTodoList = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};
const addItem = (task) => {
  if (task) {
    const taskItem = {
      description: task,
      completed: false,
      index: todoList.length + 1,
    };
    todoList.push(taskItem);
    saveTodoList();
  }
};
const markCompleted = (itemIndex) => {
  if (itemIndex >= 0 && itemIndex < todoList.length) {
    todoList[itemIndex].completed = true;
    saveTodoList();
  }
};
const removeItem = (index) => {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
};
const removeCompletedItems = () => {
  todoList = todoList.filter((item) => !item.completed);
  saveTodoList();
};
const editItem = (index, description) => {
  todoList[index].description = description;
  saveTodoList();
};
const listContainer = document.querySelector('.list');
const displayToDoList = () => {
  listContainer.innerHTML = '';
  todoList.forEach((item, index) => {
    const listItem = document.createElement('div');
    listItem.className = 'list-properties';
    listItem.innerHTML = `
          <div class="both-sides">
            <span class="left-items">
              <input type="checkbox" ${item.completed ? 'checked' : ''} data-index="${index}">
              <input type="text" value="${item.description}" class="input2">
            </span>
            <span class="right-items">
              <div class="edit-item" data-index="${index}"></div>
              <div class="remove-item" data-index="${index}"><i class="fa-solid fa-trash"></i></div>
            </span>
          </div>
          <hr class="line-1">
        `;
    const checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.addEventListener('change', (event) => {
      const index = event.target.getAttribute('data-index');
      markCompleted(index);
      displayToDoList();
    });
    const description = listItem.querySelector('input[type="text"]');
    description.addEventListener('input', (event) => {
      const index = event.target.parentNode.parentNode.querySelector('input[type="checkbox"]').getAttribute('data-index');
      editItem(index, event.target.value);
    });
    description.addEventListener('blur', (event) => {
      const index = event.target.parentNode.parentNode.querySelector('input[type="checkbox"]').getAttribute('data-index');
      editItem(index, event.target.value);
      description.setAttribute('readonly', true);
      displayToDoList();
    });
    const editButton = listItem.querySelector('.edit-item');
    editButton.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      const descriptionInput = listItem.querySelector('input[type="text"]');
      descriptionInput[index].removeAttribute('readonly');
      descriptionInput[index].focus();
    });
    const removeButton = listItem.querySelector('.remove-item');
    removeButton.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      removeItem(index);
      displayToDoList();
    });
    listContainer.appendChild(listItem);
  });
};
export {
  displayToDoList,
  getTodoList, addItem, markCompleted, removeItem, removeCompletedItems, editItem,
};