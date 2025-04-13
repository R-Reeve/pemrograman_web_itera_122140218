// Daftar kategori untuk Eisenhower Matrix
// Ada 4 kotak: penting & mendesak, penting tapi tidak mendesak, dll
const MATRIX_CATEGORIES = [
  "urgent-important",         // Mendesak dan Penting
  "not-urgent-important",     // Tidak Mendesak tapi Penting
  "urgent-not-important",     // Mendesak tapi Tidak Penting
  "not-urgent-not-important"  // Tidak Mendesak dan Tidak Penting
];

// Fungsi untuk membuat item tugas di layar
// Ini membuat <li> yang bisa ditampilkan dan bisa dihapus
const createTaskItem = (task, category) => {
  const li = document.createElement("li");   // Buat <li> baru
  li.textContent = task;                     // Isi teksnya dengan nama tugas
  li.style.display = "flex";                 // Supaya isinya sejajar
  li.style.justifyContent = "space-between"; // Supaya teks di kiri, tombol di kanan
  li.style.alignItems = "center";            // Supaya rapih sejajar vertikal

  // Buat tombol hapus 
  const delBtn = document.createElement("button");
  delBtn.textContent = "Hapus";
  delBtn.addEventListener("click", () => {
    li.remove();                              // Hapus elemen dari layar
    removeTaskFromLocal(task, category);      // Hapus juga dari penyimpanan lokal
  });

  li.appendChild(delBtn); // Tambahkan tombol ke dalam <li>
  return li;              // Kembalikan <li> yang sudah siap dipakai
};

// Fungsi untuk menyimpan tugas ke localStorage
// Jadi walau halaman direfresh, tugasnya tetap ada
const saveTaskToLocal = (task, category) => {
  // Ambil data lama dari localStorage, atau pakai array kosong kalau belum ada
  const tasks = JSON.parse(localStorage.getItem(`matrix-${category}`)) || [];
  tasks.push(task); // Tambahkan tugas baru ke array
  // Simpan kembali ke localStorage
  localStorage.setItem(`matrix-${category}`, JSON.stringify(tasks));
};

// Fungsi untuk menghapus tugas dari localStorage
const removeTaskFromLocal = (task, category) => {
  let tasks = JSON.parse(localStorage.getItem(`matrix-${category}`)) || [];
  // Hapus tugas yang cocok
  tasks = tasks.filter((t) => t !== task);
  // Simpan ulang data yang sudah dihapus tadi
  localStorage.setItem(`matrix-${category}`, JSON.stringify(tasks));
};

// Fungsi utama untuk menjalankan fitur matrix
export function initMatrix() {
  const form = document.getElementById("matrix-form");         // Form input tugas
  const input = document.getElementById("matrix-input");       // Input teks tugas
  const categorySelect = document.getElementById("matrix-category"); // Pilihan kategori

  // Saat halaman dibuka, tampilkan semua tugas yang sudah disimpan sebelumnya
  MATRIX_CATEGORIES.forEach((category) => {
    const tasks = JSON.parse(localStorage.getItem(`matrix-${category}`)) || [];
    // Cari elemen <ul> di kotak yang sesuai kategori
    const listElement = document.querySelector(
      `.matrix-cell[data-category="${category}"] ul`
    );
    // Untuk setiap tugas, tampilkan sebagai item <li>
    tasks.forEach((task) => {
      listElement.appendChild(createTaskItem(task, category));
    });
  });

  // Saat form dikirim (misal pencet Enter atau klik tombol tambah)
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Biar halaman tidak reload
    const task = input.value.trim();        // Ambil teks tugas dari input
    const category = categorySelect.value;  // Ambil kategori yang dipilih

    // Kalau dua-duanya terisi (tidak kosong)
    if (task && category) {
      const listElement = document.querySelector(
        `.matrix-cell[data-category="${category}"] ul`
      );
      // Tampilkan tugasnya di layar
      listElement.appendChild(createTaskItem(task, category));
      // Simpan juga ke localStorage
      saveTaskToLocal(task, category);
      input.value = ""; // Kosongkan input lagi setelah ditambah
    }
  });
}