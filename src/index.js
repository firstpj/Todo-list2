import './style.css';

// Get DOM
const listElement = document.createElement('div');
listElement.classList = 'dynamic-container';
const listContainer = document.querySelector('.list');

const task = [
  {
    description: 'itema',
    completed: false,
    index: 1,
  },
  {
    description: 'itemb',
    completed: false,
    index: 2,
  },
  {
    description: 'itemc',
    completed: false,
    index: 4,
  },
  {
    description: 'itemd',
    completed: false,
    index: 3,
  },
];

function iterateTasks() {
  const sortedTasks = task.sort((a, b) => a.index - b.index);
  sortedTasks.forEach((item) => {
    listElement.innerHTML
        += `
        <div class="list-properties">
            <span class="left-items">
                <input type="checkbox">
                <p>${item.description}</p>
            </span>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <hr>
        `;
  });

  listContainer.appendChild(listElement);
}
iterateTasks();
