//Tugas 1
// Ambil elemen DOM
const domOutput = document.getElementById("dom-output");
const inputField = document.getElementById("list_input");
const btnTambah = document.getElementById("btn-tambah-list");
const btnHapus = document.getElementById("btn-hapus-list");

// Pastikan elemen ada sebelum menambahkan event listener
if (btnTambah && btnHapus && domOutput) {
    document.addEventListener("DOMContentLoaded", function () {
        const savedItems = JSON.parse(localStorage.getItem("todoList")) || [];
        savedItems.forEach(item => addItem(item.text, item.completed, false));
    });

    // Fungsi untuk menambahkan item
    function addItem(text, completed = false, save = true) {
        if (!text.trim()) return;

        const newItem = document.createElement("div");
        newItem.className = "p-2 mb-2 bg-gray-100 rounded flex items-center cursor-pointer";

        const checkIcon = document.createElement("span");
        checkIcon.innerHTML = completed ? "✔" : "◻";
        checkIcon.className = "text-green-500 font-bold mr-2";

        const textNode = document.createElement("span");
        textNode.innerText = text;

        newItem.addEventListener("click", function () {
            checkIcon.innerHTML = checkIcon.innerHTML === "◻" ? "✔" : "◻";
            updateLocalStorage();
        });

        newItem.appendChild(checkIcon);
        newItem.appendChild(textNode);
        domOutput.appendChild(newItem);

        if (save) {
            updateLocalStorage();
        }
    }

    btnTambah.addEventListener("click", function () {
        addItem(inputField.value);
        inputField.value = "";
    });

    btnHapus.addEventListener("click", function () {
        if (domOutput.lastChild) {
            domOutput.removeChild(domOutput.lastChild);
            updateLocalStorage();
        }
    });

    function updateLocalStorage() {
        const items = [];
        domOutput.childNodes.forEach(item => {
            const textSpan = item.querySelector("span:nth-child(2)");
            const checkIcon = item.querySelector("span:nth-child(1)");
            if (textSpan && checkIcon) {
                items.push({ text: textSpan.innerText, completed: checkIcon.innerHTML === "✔" });
            }
        });
        localStorage.setItem("todoList", JSON.stringify(items));
    }
}

//Soal 2
// Fungsi untuk kalkulator
function hitung_kalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
      case "tambah":
          hasil = angka1 + angka2;
          break;
      case "kurang":
          hasil = angka1 - angka2;
          break;
      case "kali":
          hasil = angka1 * angka2;
          break;
      case "bagi":
          if (angka2 === 0) {
              return "Error: Pembagian dengan nol tidak diperbolehkan";
          }
          hasil = angka1 / angka2;
          break;
      case "pangkat":
          hasil = 1;
          for (let i = 0; i < angka2; i++){
              hasil = hasil * angka1;
          }
      break;
      case "modulus":
          hasil = angka1 % angka2;
          break;
      default:
            return "Operasi tidak valid";
    }
    return hasil;
  }
  
  function hitung_akar(angka3){
      if (angka3 < 0){
          return "Tidak dapat menghitung akar kuadrat dari bilangan negatif";
      }
      return hasil = Math.sqrt(angka3);
  }
  
  // Event handler untuk tombol operasi matematika
  document.getElementById("btn-tambah").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitung_kalkulator(angka1, angka2, "tambah");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
    }
  });
  
  document.getElementById("btn-kurang").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`
    } else {
        const hasil = hitung_kalkulator(angka1, angka2, "kurang");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
    }
  });
  
  document.getElementById("btn-kali").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitung_kalkulator(angka1, angka2, "kali");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
    }
  });
  
  document.getElementById("btn-bagi").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitung_kalkulator(angka1, angka2, "bagi");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
    }
  });
  
  document.getElementById("btn-pangkat").addEventListener("click", function() {
      const angka1 = parseFloat(document.getElementById("angka1").value);
      const angka2 = parseFloat(document.getElementById("angka2").value);
      
      if (isNaN(angka1) || isNaN(angka2)) {
          document.getElementById("hasil-kalkulator").innerHTML = 
              `<p class="text-red-500">Masukkan angka yang valid!</p>`;
      } else {
          const hasil = hitung_kalkulator(angka1, angka2, "pangkat");
          document.getElementById("hasil-kalkulator").innerHTML = 
              `<p>Hasil: ${angka1} ^ ${angka2} = ${hasil}</p>`;
      }
    });
  
    document.getElementById("btn-modulus").addEventListener("click", function() {
      const angka1 = parseFloat(document.getElementById("angka1").value);
      const angka2 = parseFloat(document.getElementById("angka2").value);
      
      if (isNaN(angka1) || isNaN(angka2)) {
          document.getElementById("hasil-kalkulator").innerHTML = 
              `<p class="text-red-500">Masukkan angka yang valid!</p>`;
      } else {
          const hasil = hitung_kalkulator(angka1, angka2, "modulus");
          document.getElementById("hasil-kalkulator").innerHTML = 
              `<p>Hasil: ${angka1} % ${angka2} = ${hasil}</p>`;
      }
    });
  
    document.getElementById("btn-akar").addEventListener("click", function() {
      const angka3 = parseFloat(document.getElementById("angka3").value);
      
      if (isNaN(angka3) || angka3 < 0) {
          document.getElementById("hasil-akar").innerHTML = 
              `<p class="text-red-500">Masukkan angka yang valid (>= 0)!</p>`;
      } else {
          const hasil = hitung_akar(angka3);
          document.getElementById("hasil-akar").innerHTML = 
              `<p>Hasil: &radic;${angka3} = ${hasil}</p>`;
      }
    });

//Soal 3
//Form Validasi
document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah form submit otomatis

    // Ambil nilai input
    const username = document.getElementById("nama-input");
    const email = document.getElementById("email-input");
    const password = document.getElementById("password-input");

    // Hapus pesan error sebelumnya
    document.querySelectorAll(".error-message").forEach(el => el.remove());

    let valid = true;

    // Fungsi untuk menampilkan pesan error
    function showError(input, message) {
        const errorElement = document.createElement("p");
        errorElement.className = "error-message text-red-500 text-sm font-bold mt-1";
        errorElement.innerText = message;
        input.parentNode.appendChild(errorElement);
    }

    // Validasi Username
    if (username.value.trim().length <= 3) {
        showError(username, "Username harus lebih dari tiga karakter!");
        valid = false;
    }

    // Validasi Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Email tidak valid!");
        valid = false;
    }

    // Validasi Password
    if (password.value.trim().length < 8) {
        showError(password, "Password minimal 8 karakter!");
        valid = false;
    }

    // Jika valid, tampilkan sukses
    if (valid) {
        alert("Anda Tervalidasi!");
    }
});
