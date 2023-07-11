import displayToDoList from '../display.js';

jest.mock('../display.js', () => jest.fn());

describe('displayToDoList', () => {
  test('should display todo list items', () => {
    const todoList = [
      { description: 'Task a', completed: false },
      { description: 'Task b', completed: true },
      { description: 'Task c', completed: false },
    ];
    const listContainer = document.createElement('div');
    listContainer.classList.add('list');
    document.body.appendChild(listContainer);
    displayToDoList(todoList);
    const listItems = listContainer.querySelectorAll('.list-properties');
    expect(listItems.length).toBe(3);
    expect(listItems[0].querySelector('input[type="text"]').value).toBe('Task a');
    expect(listItems[1].querySelector('input[type="text"]').value).toBe('Task b');
    expect(listItems[2].querySelector('input[type="text"]').value).toBe('Task c');
    document.body.removeChild(listContainer);
  });
});
