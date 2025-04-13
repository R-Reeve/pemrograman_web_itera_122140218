// ==============================
// Modul Todo List
// ==============================

// Kunci untuk menyimpan data todo di localStorage
const todoKey = 'todoItems';

// Fungsi untuk ambil data todo dari localStorage
const getTodos = () => JSON.parse(localStorage.getItem(todoKey)) || [];
// Penjelasan: Coba ambil data todo dari localStorage. 
// Kalau nggak ada datanya, balikin array kosong biar gak error.

// Fungsi untuk menyimpan data todo ke localStorage
const saveTodos = (todos) => localStorage.setItem(todoKey, JSON.stringify(todos));
// Penjelasan: Ubah array todos jadi teks (pakai JSON.stringify) dan simpan ke localStorage

// Fungsi untuk menampilkan todo ke halaman web (DOM)
const renderTodos = () => {
  const todoList = document.getElementById('todo-list'); // Ambil elemen daftar todo
  todoList.innerHTML = ''; // Kosongin dulu biar gak numpuk

  const todos = getTodos(); // Ambil data todo

  todos.forEach((todo, index) => {
    const item = document.createElement('div'); // Bikin elemen <div> baru
    item.className = 'todo-item'; // Kasih class biar bisa di-style pakai CSS

    // Isi HTML-nya: checkbox, teks todo, dan tombol hapus
    item.innerHTML = 
      `<input type="checkbox" ${todo.done ? 'checked' : ''} data-index="${index}" class="check-todo" />
      <span contenteditable="true" class="editable ${todo.done ? 'done' : ''}" data-index="${index}">${todo.text}</span>
      <button data-index="${index}" class="delete-btn">Hapus</button>`;

    // Masukkan elemen ke dalam daftar
    todoList.appendChild(item);
  });
};

// Fungsi untuk menambahkan todo baru
const addTodo = (text) => {
  const todos = getTodos(); // Ambil data todo
  todos.push({ text, done: false }); // Tambahkan todo baru (belum selesai)
  saveTodos(todos); // Simpan kembali
  renderTodos(); // Tampilkan ulang todo
};

// Fungsi untuk menghapus todo berdasarkan index-nya
const deleteTodo = (index) => {
  const todos = getTodos(); // Ambil data
  todos.splice(index, 1); // Hapus satu item sesuai index
  saveTodos(todos); // Simpan ulang
  renderTodos(); // Tampilkan ulang
};

// Fungsi untuk ganti status todo: selesai ↔ belum selesai
const toggleTodo = (index) => {
  const todos = getTodos(); // Ambil data
  todos[index].done = !todos[index].done; // Balikkan statusnya (true jadi false, sebaliknya)
  saveTodos(todos); // Simpan ulang
  renderTodos(); // Tampilkan ulang
};

// Fungsi untuk mengedit teks todo
const editTodo = (index, newText) => {
  const todos = getTodos(); // Ambil data
  todos[index].text = newText; // Ganti teksnya
  saveTodos(todos); // Simpan ulang
};

// Fungsi utama buat mengatur semua interaksi di halaman
export const initTodo = () => {
  const form = document.getElementById('todo-form'); // Form untuk input todo
  const input = document.getElementById('todo-input'); // Input teks todo

  // Saat form disubmit (ditekan Enter), tambahkan todo baru
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Biar gak reload halaman
    if (input.value.trim()) { // Kalau input gak kosong
      addTodo(input.value.trim()); // Tambahkan todo
      input.value = ''; // Kosongkan input lagi
    }
  });

  // Saat tombol hapus atau checkbox diklik
  document.getElementById('todo-list').addEventListener('click', (e) => {
    const index = e.target.dataset.index; // Ambil index dari elemen
    if (e.target.classList.contains('delete-btn')) deleteTodo(index); // Kalau tombol hapus ditekan
    if (e.target.classList.contains('check-todo')) toggleTodo(index); // Kalau checkbox ditekan
  });

  // Saat teks todo selesai diedit (blur = fokus hilang)
  document.getElementById('todo-list').addEventListener('blur', (e) => {
    if (e.target.classList.contains('editable')) { // Kalau elemen yang blur itu teks todo
      const index = e.target.dataset.index; // Ambil index-nya
      editTodo(index, e.target.textContent.trim()); // Simpan teks yang diedit
    }
  }, true); // true = event capturing biar tetap kebaca

  renderTodos(); // Pertama kali tampilkan semua todo
};