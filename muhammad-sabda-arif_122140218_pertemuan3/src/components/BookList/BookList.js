import React from 'react';
import PropTypes from 'prop-types';
import { useBooks } from '../../context/BookContext';

const BookList = ({ onEdit }) => {
  const { books, deleteBook, filter } = useBooks();

  const filteredBooks = books.filter((book) => {
    return (
      (filter.status === 'all' || book.status === filter.status) &&
      book.title.toLowerCase().includes(filter.search.toLowerCase())
    );
  });

  return (
    <ul>
      {filteredBooks.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> - {book.author} ({book.status})
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => deleteBook(book.id)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default BookList;