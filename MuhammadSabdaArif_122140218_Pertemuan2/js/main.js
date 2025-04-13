// Import semua fitur dari folder modules
import { initTodo } from './modules/todo.js';         // Fitur daftar tugas (to-do list)
import { initPomodoro } from './modules/pomodoro.js'; // Fitur timer Pomodoro
import { initMatrix } from './modules/matrix.js';     // Fitur Eisenhower Matrix
import { initGTD } from './modules/gtd.js';           // Fitur Getting Things Done (GTD)

// Jalankan semua fitur setelah halaman web selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  initTodo();     // Aktifkan to-do list
  initPomodoro(); // Aktifkan Pomodoro timer
  initMatrix();   // Aktifkan Eisenhower Matrix
  initGTD();      // Aktifkan GTD
});