import { initTodo } from './modules/todo.js';
import { initPomodoro } from './modules/pomodoro.js';
import { initMatrix } from './modules/matrix.js';
import { initGTD } from './modules/gtd.js';

// Inisialisasi semua fitur saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  initTodo();
  initPomodoro();
  initMatrix();
  initGTD();
});