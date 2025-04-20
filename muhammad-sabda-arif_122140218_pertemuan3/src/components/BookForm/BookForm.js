import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useBooks } from '../../context/BookContext';

const defaultForm = {
  title: '',
  author: '',
  status: 'owned',
};

const BookForm = ({ editingBook, onFinish }) => {
  const [form, setForm] = useState(defaultForm);
  const { addBook, updateBook } = useBooks();

  useEffect(() => {
    if (editingBook) {
      setForm(editingBook);
    } else {
      setForm(defaultForm);
    }
  }, [editingBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) {
      return alert('Judul dan penulis wajib diisi!');
    }

    editingBook ? updateBook(form) : addBook(form);
    onFinish();
    setForm(defaultForm);
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
          <select id="status" name="status" value={form.status} onChange={handleChange}>
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

BookForm.propTypes = {
  editingBook: PropTypes.object,
  onFinish: PropTypes.func.isRequired,
};

export default BookForm;