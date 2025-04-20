// Import React dan custom hook untuk statistik buku
import React from 'react';
import { useBookStats } from '../../hooks/useBookStats';

// Komponen ini menampilkan statistik buku secara visual
const Stats = () => {
  // Ambil data statistik dari custom hook
  const { total, owned, reading, wishlist } = useBookStats();

  return (
    <div className="stats-container">
      {/* Judul halaman */}
      <h1>Statistik Buku</h1>

      {/* Tampilan kartu-kartu statistik */}
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Total Buku</h3>
          <p>{total}</p> {/* Tampilkan total semua buku */}
        </div>
        <div className="stat-card">
          <h3>Dimiliki</h3>
          <p>{owned}</p> {/* Tampilkan jumlah buku yang dimiliki */}
        </div>
        <div className="stat-card">
          <h3>Sedang Dibaca</h3>
          <p>{reading}</p> {/* Tampilkan jumlah buku yang sedang dibaca */}
        </div>
        <div className="stat-card">
          <h3>Ingin Dibeli</h3>
          <p>{wishlist}</p> {/* Tampilkan jumlah buku yang ingin dibeli */}
        </div>
      </div>
    </div>
  );
};

export default Stats; // Ekspor komponen agar bisa digunakan di halaman lain