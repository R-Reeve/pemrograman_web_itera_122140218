// File ini berisi logika untuk fitur Pomodoro Timer
// Pomodoro: kerja fokus 25 menit, lalu istirahat

// Kelas utama PomodoroTimer
export class PomodoroTimer {
  // Konstruktor: dipanggil saat objek timer dibuat
  constructor(displayElement) {
    this.display = displayElement;       // Elemen HTML tempat waktu ditampilkan
    this.initialTime = 25 * 60;          // Waktu awal = 25 menit (dalam detik)
    this.time = this.initialTime;        // Variabel yang menyimpan waktu tersisa
    this.timer = null;                   // Menyimpan ID interval timer (biar bisa dihentikan nanti)
  }

  // Fungsi untuk memulai timer
  start() {
    // Cek dulu, jangan sampai timer sudah jalan lalu dimulai lagi
    if (!this.timer) {
      this.timer = setInterval(() => {
        // Selama waktu belum habis
        if (this.time > 0) {
          this.time--;         // Kurangi waktu 1 detik
          this.updateDisplay(); // Update tampilan waktu di layar
        } else {
          this.stop();         // Kalau waktu habis, hentikan timer
          alert('Waktu habis! Saatnya istirahat.'); // Kasih alert
        }
      }, 1000); // Timer jalan setiap 1000ms = 1 detik
    }
  }

  // Fungsi untuk menjeda sementara timer
  pause() {
    clearInterval(this.timer); // Hentikan interval
    this.timer = null;         // Kosongkan ID timer
  }

  // Fungsi untuk mengatur ulang timer ke 25:00
  reset() {
    this.pause();               // Berhentiin dulu
    this.time = this.initialTime; // Balikin ke 25 menit
    this.updateDisplay();         // Update tampilan ke 25:00
  }

  // Fungsi untuk menampilkan waktu ke layar
  updateDisplay() {
    // Hitung menit dan detik dari total waktu (dalam detik)
    const minutes = String(Math.floor(this.time / 60)).padStart(2, '0'); // Tambah 0 di depan kalau perlu
    const seconds = String(this.time % 60).padStart(2, '0');
    // Tampilkan di HTML: format mm:ss
    this.display.textContent = `${minutes}:${seconds}`;
  }
}

// Fungsi untuk menghubungkan tombol-tombol dengan timer
export function initPomodoro() {
  const display = document.getElementById('pomodoro-timer'); // Ambil elemen tempat timer ditampilkan
  const timer = new PomodoroTimer(display);                  // Buat objek timer baru

  // Kalau tombol "Mulai" diklik, jalankan timer
  document.getElementById('start-btn').addEventListener('click', () => timer.start());

  // Kalau tombol "Jeda" diklik, pause timer
  document.getElementById('pause-btn').addEventListener('click', () => timer.pause());

  // Kalau tombol "Reset" diklik, balikin ke 25:00
  document.getElementById('reset-btn').addEventListener('click', () => timer.reset());

  // Saat halaman dibuka, tampilkan dulu waktu awal (25:00)
  timer.updateDisplay();
}