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
    <div>
      <select value={filter.status} onChange={handleStatusChange}>
        <option value="all">Semua</option>
        <option value="owned">Dimiliki</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wishlist">Ingin Dibeli</option>
      </select>
      <input
        type="text"
        value={filter.search}
        onChange={handleSearchChange}
        placeholder="Cari judul..."
      />
    </div>
  );
};

export default BookFilter;