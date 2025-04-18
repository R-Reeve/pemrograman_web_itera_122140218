import React, { createContext, useState, useEffect, useContext } from 'react';

// Membuat konteks
const BookContext = createContext();

// Provider untuk membungkus aplikasi dan menyediakan context
export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState({ status: 'all', search: '' });

  // Menambahkan efek samping jika diperlukan, misalnya mengambil data dari localStorage
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(savedBooks);
  }, []);

  // Fungsi untuk menambahkan buku
  const addBook = (book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  // Fungsi untuk menghapus buku
  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  // Fungsi untuk mengupdate buku
  const updateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook, filter, setFilter }}>
      {children}
    </BookContext.Provider>
  );
};

// Hook untuk mengakses data dari BookContext
export const useBooks = () => useContext(BookContext);