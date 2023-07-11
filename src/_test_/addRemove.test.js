import { addItem, removeItem } from '../todoList.js';

describe('addItem', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  test('should add a task item to the todo list', () => {
    const task = 'Do laundry';
    addItem(task);
    const storedList = JSON.parse(localStorage.getItem('todoList'));
    expect(storedList).toHaveLength(1);
    expect(storedList[0]).toMatchObject({
      description: task,
      completed: false,
    });
  });

  test('should not add an empty task item to the todo list', () => {
    addItem('');
    const storedList = JSON.parse(localStorage.getItem('todoList'));
    expect(storedList).toBeNull();
  });
});
describe('Remove item', () => {
  test('should not remove a task item if index is invalid', () => {
    const task = 'Do laundry';
    addItem(task);
    removeItem(1);
    const storedList = JSON.parse(localStorage.getItem('todoList'));
    expect(storedList).toHaveLength(1);
    expect(storedList[0]).toMatchObject({
      description: task,
      completed: false,
    });
  });
});