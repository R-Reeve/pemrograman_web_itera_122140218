// Ambil elemen form, input, dan daftar tugas dari HTML
const todoForm = document.getElementById("todo-form"); // Form tempat user nulis tugas
const todoInput = document.getElementById("todo-input"); // Input teks buat ngetik tugas
const todoList = document.getElementById("todo-list"); // Tempat nampilinn daftar tugas

// Ambil data tugas dari localStorage, kalau nggak ada, bikin array kosong
let todos = JSON.parse(localStorage.getItem("todos")) || []; // Simpan tugas-tugas dalam bentuk array

// Simpan daftar tugas ke localStorage (biar nggak ilang kalau refresh)
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos)); // Simpan sebagai string di penyimpanan browser
};

// Tampilkan semua tugas di layar
const renderTodos = () => {
  todoList.innerHTML = ""; // Bersihin dulu isinya biar nggak dobel
  todos.forEach(({ text, done }, index) => { // Loop semua tugas
    const li = document.createElement("li"); // Bikin elemen <li> baru
    li.className = done ? "done" : ""; // Kalau tugasnya udah selesai, tambahin class "done"
    li.innerHTML = `
      <span>${text}</span> 
      <div>
        <button class="done-btn" data-index="${index}">Selesai</button>
        <button class="delete-btn" data-index="${index}">Hapus</button>
      </div>
    `;
    todoList.appendChild(li); // Tambahin tugas ke daftar di HTML
  });
};

// Tambahkan tugas baru ke daftar
const addTodo = (text) => {
  todos.push({ text, done: false }); // Masukkan tugas baru, belum selesai (done: false)
  saveTodos(); // Simpan ke localStorage
  renderTodos(); // Tampilkan ulang semua tugas
};

// Ubah status tugas: dari belum selesai jadi selesai, atau sebaliknya
const toggleDone = (index) => {
  todos[index].done = !todos[index].done; // Tukar nilai done (true <-> false)
  saveTodos(); // Simpan ke localStorage
  renderTodos(); // Tampilkan ulang
};

// Hapus tugas dari daftar
const deleteTodo = (index) => {
  todos.splice(index, 1); // Hapus tugas berdasarkan index-nya
  saveTodos(); // Simpan perubahan
  renderTodos(); // Tampilkan ulang
};

// Kalau user tekan tombol "Tambah" di form
todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Biar nggak reload halaman
  const text = todoInput.value.trim(); // Ambil teks tugas, hapus spasi depan-belakang
  if (text) { // Kalau inputnya nggak kosong
    addTodo(text); // Tambahin tugas ke daftar
    todoInput.value = ""; // Kosongin input biar bisa nulis lagi
  }
});

// Kalau user klik tombol "Selesai" atau "Hapus"
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done-btn")) {
    toggleDone(e.target.dataset.index); // Tandai tugas selesai/belum
  } else if (e.target.classList.contains("delete-btn")) {
    deleteTodo(e.target.dataset.index); // Hapus tugas
  }
});

// Tampilkan semua tugas pas pertama kali halaman dibuka
renderTodos();