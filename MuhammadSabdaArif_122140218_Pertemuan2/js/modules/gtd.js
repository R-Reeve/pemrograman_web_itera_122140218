// Daftar kategori utama dalam metode GTD (Getting Things Done)
const GTD_CATEGORIES = [
  "inbox",          // Tugas masuk, belum diproses
  "next-actions",   // Tugas yang akan segera dikerjakan
  "waiting-for",    // Tugas yang menunggu orang lain atau sesuatu
  "projects",       // Tugas besar yang butuh beberapa langkah
  "someday-maybe"   // Tugas yang mungkin dikerjakan nanti
];

// Coba ambil data GTD dari penyimpanan lokal (localStorage)
// Kalau belum ada, bikin data kosong dengan format sesuai kategori di atas
const gtdData = JSON.parse(localStorage.getItem("gtdData")) || {
  inbox: [],
  "next-actions": [],
  "waiting-for": [],
  projects: [],
  "someday-maybe": []
};

// Fungsi untuk menyimpan data GTD ke localStorage
const saveGTD = () => {
  localStorage.setItem("gtdData", JSON.stringify(gtdData));
};

// Fungsi untuk membuat tampilan satu tugas di layar
// - task: isi tugasnya (teks)
// - index: posisi tugas di dalam array
// - category: kategori tempat tugas itu berada
const createTaskElement = (task, index, category) => {
  const li = document.createElement("li");   // Bikin elemen <li> untuk satu tugas
  li.textContent = task;                     // Isi <li> dengan teks tugas
  li.style.display = "flex";                 // Biar sejajar horizontal
  li.style.justifyContent = "space-between"; // Spasi rata kiri-kanan
  li.style.alignItems = "center";            // Tengah secara vertikal

  const delBtn = document.createElement("button"); // Bikin tombol "Hapus"
  delBtn.textContent = "Hapus";

  // Kalau tombol "Hapus" diklik
  delBtn.addEventListener("click", () => {
    gtdData[category].splice(index, 1); // Hapus tugas dari array
    saveGTD();                          // Simpan data terbaru ke localStorage
    renderGTD();                        // Perbarui tampilan
  });

  li.appendChild(delBtn); // Tambahkan tombol ke dalam <li>
  return li;              // Kembalikan elemen <li> yang sudah jadi
};

// Fungsi untuk menampilkan semua tugas di setiap kategori ke layar
export const renderGTD = () => {
  GTD_CATEGORIES.forEach((cat) => {
    const listEl = document.querySelector(`#gtd-${cat}`); // Cari elemen HTML berdasarkan ID
    if (listEl) {
      listEl.innerHTML = ""; // Kosongkan dulu sebelum diisi ulang
      gtdData[cat].forEach((task, index) => {
        listEl.appendChild(createTaskElement(task, index, cat)); // Tambahkan semua tugas satu per satu
      });
    }
  });
};

// Fungsi utama untuk mengaktifkan fitur GTD
export const initGTD = () => {
  renderGTD(); // Tampilkan tugas-tugas saat pertama kali halaman dimuat

  // Ambil elemen form, input tugas, dan pilihan kategori dari HTML
  const form = document.getElementById("gtd-form");
  const input = document.getElementById("gtd-input");
  const select = document.getElementById("gtd-category");

  // Saat form dikirim (misal: user tekan Enter atau klik tombol)
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Biar nggak reload halaman
    const task = input.value.trim(); // Ambil teks tugas dan hilangkan spasi depan-belakang
    const cat = select.value;        // Ambil kategori yang dipilih user
    if (task && cat) {
      gtdData[cat].push(task); // Tambahkan tugas ke array sesuai kategori
      saveGTD();               // Simpan data
      renderGTD();             // Perbarui tampilan
      input.value = "";        // Kosongkan input biar siap diisi lagi
    }
  });
};