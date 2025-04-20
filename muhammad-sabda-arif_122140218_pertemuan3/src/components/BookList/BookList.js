import React from 'react';
import PropTypes from 'prop-types';
import { useBooks } from '../../context/BookContext';

const BookList = ({ onEdit }) => {
  const { books, deleteBook, filter } = useBooks(); // Mengambil data dan fungsi dari context

  // Filter buku berdasarkan status dan judul
  const filteredBooks = books.filter((book) => {
    return (
      (filter.status === 'all' || book.status === filter.status) && // Filter status
      book.title.toLowerCase().includes(filter.search.toLowerCase()) // Filter pencarian
    );
  });

  return (
    <ul>
      {filteredBooks.map((book) => (
        <li key={book.id}>
          <div className="book-details">
            <strong>{book.title}</strong>
            <span>Penulis: {book.author}</span>
            <span>Status: {book.status}</span>
          </div>
          <div className="book-actions">
            {/* Tombol untuk mengedit dan menghapus buku */}
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Hapus</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Validasi props
BookList.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default BookList;