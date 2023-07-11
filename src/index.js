import './style.css';
import {
  getTodoList, addItem, markCompleted, removeItem, removeCompletedItems, editItem,
} from './todoList.js';
import displayToDoList from './display.js';

const inputItem = document.querySelector('.inputs-field');
const addButton = document.querySelector('.add-btn');
const clearAll = document.querySelector('#clear-btn');
let editIndex = -1;
addButton.addEventListener('click', () => {
  if (editIndex === -1) {
    addItem(inputItem.value);
  } else {
    editItem(editIndex, inputItem.value);
    editIndex = -1;
    addButton.textContent = 'Add';
  }
  inputItem.value = '';
  displayToDoList(getTodoList());
});
clearAll.addEventListener('click', () => {
  removeCompletedItems();
  displayToDoList(getTodoList());
});
// Event listener for marking an item as finished
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('complete-btn')) {
    const itemIndex = parseInt(event.target.dataset.index, 10);
    markCompleted(itemIndex);
    displayToDoList(getTodoList());
  }
});
// Event listener for disposing of an object
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const itemIndex = parseInt(event.target.dataset.index, 10);
    removeItem(itemIndex);
    displayToDoList(getTodoList());
  }
});
// Event listener for enhancing an object
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-btn')) {
    const itemIndex = parseInt(event.target.dataset.index, 10);
    inputItem.value = getTodoList()[itemIndex].description;
    editIndex = itemIndex;
    addButton.textContent = 'Save';
  }
});
displayToDoList(getTodoList());