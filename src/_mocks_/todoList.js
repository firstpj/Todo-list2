const mockTodoList = {
  todoList: [],
  getTodoList: jest.fn(() => mockTodoList.todoList),
  addItem: jest.fn((task) => {
    mockTodoList.todoList.push({ description: task, completed: false });
  }),
  removeItem: jest.fn((index) => {
    mockTodoList.todoList.splice(index, 1);
  }),
};

export default mockTodoList;
