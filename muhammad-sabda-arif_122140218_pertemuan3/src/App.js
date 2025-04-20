// Import React dan modul untuk routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import context untuk state buku
import { BookProvider } from './context/BookContext';

// Import halaman utama dan statistik
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';

// Import file CSS untuk styling
import './App.css';

function App() {
  return (
    // Membungkus seluruh aplikasi dengan context BookProvider
    // Agar semua komponen bisa mengakses data buku
    <BookProvider>
      {/* Router digunakan untuk berpindah halaman tanpa reload */}
      <Router>
        {/* Navigasi menu */}
        <nav>
          {/* Tautan ke halaman Home */}
          <Link to="/" className="home">Home</Link>
          {/* Tautan ke halaman Statistik */}
          <Link to="/stats" className="stats">Statistik</Link>
        </nav>

        {/* Routing halaman */}
        <Routes>
          {/* Rute untuk halaman Home */}
          <Route path="/" element={<Home />} />
          {/* Rute untuk halaman Statistik */}
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

// Ekspor komponen App agar bisa digunakan di file lain
export default App;