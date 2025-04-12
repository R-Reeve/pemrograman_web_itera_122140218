const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach(({ text, done }, index) => {
    const li = document.createElement("li");
    li.className = done ? "done" : "";
    li.innerHTML = `
      <span>${text}</span>
      <div>
        <button class="done-btn" data-index="${index}">Selesai</button>
        <button class="delete-btn" data-index="${index}">Hapus</button>
      </div>
    `;
    todoList.appendChild(li);
  });
};

const addTodo = (text) => {
  todos.push({ text, done: false });
  saveTodos();
  renderTodos();
};

const toggleDone = (index) => {
  todos[index].done = !todos[index].done;
  saveTodos();
  renderTodos();
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
};

// Event listener
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done-btn")) {
    toggleDone(e.target.dataset.index);
  } else if (e.target.classList.contains("delete-btn")) {
    deleteTodo(e.target.dataset.index);
  }
});

renderTodos();