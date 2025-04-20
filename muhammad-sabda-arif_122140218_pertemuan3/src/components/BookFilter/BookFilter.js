import React from 'react';
import { useBooks } from '../../context/BookContext';

const BookFilter = () => {
  const { filter, setFilter } = useBooks();

  const handleStatusChange = (e) => {
    setFilter((prev) => ({ ...prev, status: e.target.value }));
  };

  const handleSearchChange = (e) => {
    setFilter((prev) => ({ ...prev, search: e.target.value }));
  };

  return (
    <div className="card">
      <h2>Filter Buku</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
          <label htmlFor="status">Status Buku</label>
          <select
            id="status"
            value={filter.status}
            onChange={handleStatusChange}
            style={{ width: '100%' }}
          >
            <option value="all">Semua</option>
            <option value="owned">Dimiliki</option>
            <option value="reading">Sedang Dibaca</option>
            <option value="wishlist">Ingin Dibeli</option>
          </select>
        </div>

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

export default BookFilter;