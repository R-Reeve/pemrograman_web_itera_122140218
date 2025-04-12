// js/modules/gtd.js

const GTD_CATEGORIES = [
    "inbox",
    "next-actions",
    "waiting-for",
    "projects",
    "someday-maybe"
  ];
  
  const gtdData = JSON.parse(localStorage.getItem("gtdData")) || {
    inbox: [],
    "next-actions": [],
    "waiting-for": [],
    projects: [],
    "someday-maybe": []
  };
  
  const saveGTD = () => {
    localStorage.setItem("gtdData", JSON.stringify(gtdData));
  };
  
  const createTaskElement = (task, index, category) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    const delBtn = document.createElement("button");
    delBtn.textContent = "Hapus";
    delBtn.addEventListener("click", () => {
      gtdData[category].splice(index, 1);
      saveGTD();
      renderGTD();
    });
    li.appendChild(delBtn);
    return li;
  };
  
  export const renderGTD = () => {
    GTD_CATEGORIES.forEach((cat) => {
      const listEl = document.querySelector(`#gtd-${cat}`);
      if (listEl) {
        listEl.innerHTML = "";
        gtdData[cat].forEach((task, index) => {
          listEl.appendChild(createTaskElement(task, index, cat));
        });
      }
    });
  };
  
  export const initGTD = () => {
    renderGTD();
  
    const form = document.getElementById("gtd-form");
    const input = document.getElementById("gtd-input");
    const select = document.getElementById("gtd-category");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const task = input.value.trim();
      const cat = select.value;
      if (task && cat) {
        gtdData[cat].push(task);
        saveGTD();
        renderGTD();
        input.value = "";
      }
    });
  };  