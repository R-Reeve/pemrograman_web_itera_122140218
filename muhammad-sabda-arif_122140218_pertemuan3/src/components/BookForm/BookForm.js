import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useBooks } from '../../context/BookContext';

const defaultForm = {
  title: '',
  author: '',
  status: 'owned', // default status
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
    if (!form.title || !form.author) return alert('Judul dan penulis wajib diisi!');

    if (editingBook) {
      updateBook(form);
    } else {
      addBook(form);
    }
    onFinish();
    setForm(defaultForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Judul Buku"
        required
      />
      <input
        type="text"
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Penulis"
        required
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="owned">Dimiliki</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wishlist">Ingin Dibeli</option>
      </select>
      <button type="submit">{editingBook ? 'Update' : 'Tambah'}</button>
    </form>
  );
};

BookForm.propTypes = {
  editingBook: PropTypes.object,
  onFinish: PropTypes.func.isRequired,
};

export default BookForm;