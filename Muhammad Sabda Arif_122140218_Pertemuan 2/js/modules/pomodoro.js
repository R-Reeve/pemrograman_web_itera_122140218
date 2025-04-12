// js/modules/pomodoro.js

export class PomodoroTimer {
    constructor(displayElement) {
      this.display = displayElement;
      this.initialTime = 25 * 60; // 25 menit
      this.time = this.initialTime;
      this.timer = null;
    }
  
    start() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time--;
            this.updateDisplay();
          } else {
            this.stop();
            alert('Waktu habis! Saatnya istirahat. 🧀');
          }
        }, 1000);
      }
    }
  
    pause() {
      clearInterval(this.timer);
      this.timer = null;
    }
  
    reset() {
      this.pause();
      this.time = this.initialTime;
      this.updateDisplay();
    }
  
    updateDisplay() {
      const minutes = String(Math.floor(this.time / 60)).padStart(2, '0');
      const seconds = String(this.time % 60).padStart(2, '0');
      this.display.textContent = `${minutes}:${seconds}`;
    }
  }
  
  export function initPomodoro() {
    const display = document.getElementById('pomodoro-timer');
    const timer = new PomodoroTimer(display);
  
    document.getElementById('start-btn').addEventListener('click', () => timer.start());
    document.getElementById('pause-btn').addEventListener('click', () => timer.pause());
    document.getElementById('reset-btn').addEventListener('click', () => timer.reset());
  
    timer.updateDisplay(); // Inisialisasi tampilan saat pertama kali
  }  