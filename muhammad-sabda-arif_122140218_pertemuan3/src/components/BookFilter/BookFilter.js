// Mengimpor React dan hook khusus dari context BookContext
import React from 'react';
import { useBooks } from '../../context/BookContext';

// Komponen BookFilter berfungsi untuk menyaring daftar buku berdasarkan status dan pencarian judul
const BookFilter = () => {
  // Mengambil data filter dan fungsi setFilter dari context global
  const { filter, setFilter } = useBooks();

  // Fungsi ini dijalankan saat user mengubah pilihan status buku (dropdown)
  const handleStatusChange = (e) => {
    // Memperbarui filter.status berdasarkan nilai yang dipilih
    setFilter((prev) => ({ ...prev, status: e.target.value }));
  };

  // Fungsi ini dijalankan saat user mengetik di kolom pencarian judul
  const handleSearchChange = (e) => {
    // Memperbarui filter.search berdasarkan input teks dari user
    setFilter((prev) => ({ ...prev, search: e.target.value }));
  };

  return (
    // Bungkus utama dengan class card untuk tampilan seperti kartu
    <div className="card">
      <h2>Filter Buku</h2>

      {/* Form filter dengan tata letak vertikal dan jarak antar elemen */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {/* Bagian filter berdasarkan status buku */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
          <label htmlFor="status">Status Buku</label>
          <select
            id="status"
            value={filter.status}
            onChange={handleStatusChange}
            style={{ width: '100%' }}
          >
            {/* Pilihan status untuk menyaring buku */}
            <option value="all">Semua</option>
            <option value="owned">Dimiliki</option>
            <option value="reading">Sedang Dibaca</option>
            <option value="wishlist">Ingin Dibeli</option>
          </select>
        </div>

        {/* Bagian pencarian berdasarkan judul buku */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
          <label htmlFor="search">Cari Judul</label>
          <input
            id="search"
            type="text"
            value={filter.search}
            onChange={handleSearchChange}
            placeholder="Contoh: Laskar Pelangi"
            style={{ width: '100%' }}
          />
        </div>
      </form>
    </div>
  );
};

// Mengekspor komponen agar bisa digunakan di bagian lain aplikasi
export default BookFilter;