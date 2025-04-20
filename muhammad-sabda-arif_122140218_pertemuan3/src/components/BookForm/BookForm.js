import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useBooks } from '../../context/BookContext';

// Nilai awal form kosong
const defaultForm = {
  title: '',
  author: '',
  status: 'owned',
};

const BookForm = ({ editingBook, onFinish }) => {
  const [form, setForm] = useState(defaultForm); // State untuk menyimpan input form
  const { addBook, updateBook } = useBooks(); // Mengambil fungsi dari context

  // Jika ada buku yang sedang diedit, isi form dengan datanya
  useEffect(() => {
    if (editingBook) {
      setForm(editingBook);
    } else {
      setForm(defaultForm); // Jika tidak, kosongkan form
    }
  }, [editingBook]);

  // Menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update state sesuai input yang berubah
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Menangani saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!form.title || !form.author) {
      return alert('Judul dan penulis wajib diisi!');
    }

    // Tentukan apakah sedang menambahkan atau mengedit buku
    editingBook ? updateBook(form) : addBook(form);

    onFinish(); // Kembali ke tampilan normal setelah selesai
    setForm(defaultForm); // Reset form
  };

  return (
    <div className="card">
      <h2>{editingBook ? 'Edit Buku' : 'Tambah Buku Baru'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Judul Buku</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Contoh: Laskar Pelangi"
            required
          />
        </div>

        <div>
          <label htmlFor="author">Penulis</label>
          <input
            type="text"
            id="author"
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Contoh: Andrea Hirata"
            required
          />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="owned">Dimiliki</option>
            <option value="reading">Sedang Dibaca</option>
            <option value="wishlist">Ingin Dibeli</option>
          </select>
        </div>

        <button type="submit">
          {editingBook ? 'Simpan Perubahan' : 'Tambahkan Buku'}
        </button>
      </form>
    </div>
  );
};

// Validasi props
BookForm.propTypes = {
  editingBook: PropTypes.object,
  onFinish: PropTypes.func.isRequired,
};

export default BookForm;