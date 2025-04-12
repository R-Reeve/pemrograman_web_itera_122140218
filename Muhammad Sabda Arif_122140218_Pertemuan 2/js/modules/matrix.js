// js/modules/matrix.js

const MATRIX_CATEGORIES = [
  "urgent-important",
  "not-urgent-important",
  "urgent-not-important",
  "not-urgent-not-important"
];

const createTaskItem = (task, category) => {
  const li = document.createElement("li");
  li.textContent = task;
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", () => {
    li.remove();
    removeTaskFromLocal(task, category);
  });

  li.appendChild(delBtn);
  return li;
};

const saveTaskToLocal = (task, category) => {
  const tasks = JSON.parse(localStorage.getItem(`matrix-${category}`)) || [];
  tasks.push(task);
  localStorage.setItem(`matrix-${category}`, JSON.stringify(tasks));
};

const removeTaskFromLocal = (task, category) => {
  let tasks = JSON.parse(localStorage.getItem(`matrix-${category}`)) || [];
  tasks = tasks.filter((t) => t !== task);
  localStorage.setItem(`matrix-${category}`, JSON.stringify(tasks));
};

export function initMatrix() {
  const matrixCells = document.querySelectorAll(".matrix-cell");

  matrixCells.forEach((cell) => {
    const list = cell.querySelector("ul");
    const category = cell.dataset.category;

    // Elemen input dan tombol tambah
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Tambahkan tugas...";

    const button = document.createElement("button");
    button.textContent = "Tambah";

    const wrapper = document.createElement("div");
    wrapper.classList.add("matrix-input");
    wrapper.appendChild(input);
    wrapper.appendChild(button);
    cell.appendChild(wrapper);

    // Load dari localStorage
    const tasks = JSON.parse(localStorage.getItem(`matrix-${category}`)) || [];
    tasks.forEach((task) => {
      list.appendChild(createTaskItem(task, category));
    });

    // Event tambah tugas
    button.addEventListener("click", () => {
      const task = input.value.trim();
      if (task) {
        list.appendChild(createTaskItem(task, category));
        saveTaskToLocal(task, category);
        input.value = "";
      }
    });
  });
}
