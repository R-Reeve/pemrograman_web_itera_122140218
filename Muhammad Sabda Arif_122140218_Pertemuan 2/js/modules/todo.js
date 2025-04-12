// Todo List Module
const todoKey = 'todoItems';

// Ambil data dari localStorage
const getTodos = () => JSON.parse(localStorage.getItem(todoKey)) || [];

// Simpan data ke localStorage
const saveTodos = (todos) => localStorage.setItem(todoKey, JSON.stringify(todos));

// Tampilkan Todo ke DOM
const renderTodos = () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  const todos = getTodos();

  todos.forEach((todo, index) => {
    const item = document.createElement('div');
    item.className = 'todo-item';
    item.innerHTML = `
      <input type="checkbox" ${todo.done ? 'checked' : ''} data-index="${index}" class="check-todo" />
      <span contenteditable="true" class="editable ${todo.done ? 'done' : ''}" data-index="${index}">${todo.text}</span>
      <button data-index="${index}" class="delete-btn">🗑️</button>
    `;
    todoList.appendChild(item);
  });
};

// Tambahkan Todo
const addTodo = (text) => {
  const todos = getTodos();
  todos.push({ text, done: false });
  saveTodos(todos);
  renderTodos();
};

// Hapus Todo
const deleteTodo = (index) => {
  const todos = getTodos();
  todos.splice(index, 1);
  saveTodos(todos);
  renderTodos();
};

// Tandai selesai atau belum
const toggleTodo = (index) => {
  const todos = getTodos();
  todos[index].done = !todos[index].done;
  saveTodos(todos);
  renderTodos();
};

// Edit teks todo
const editTodo = (index, newText) => {
  const todos = getTodos();
  todos[index].text = newText;
  saveTodos(todos);
};

// Inisialisasi Event Todo
export const initTodo = () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
      addTodo(input.value.trim());
      input.value = '';
    }
  });

  document.getElementById('todo-list').addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if (e.target.classList.contains('delete-btn')) deleteTodo(index);
    if (e.target.classList.contains('check-todo')) toggleTodo(index);
  });

  document.getElementById('todo-list').addEventListener('blur', (e) => {
    if (e.target.classList.contains('editable')) {
      const index = e.target.dataset.index;
      editTodo(index, e.target.textContent.trim());
    }
  }, true);

  renderTodos();
};