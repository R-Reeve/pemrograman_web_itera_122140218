import React, { createContext, useState, useEffect, useContext } from 'react';

const BookContext = createContext(); // Membuat context untuk menyimpan data buku secara global

// Komponen penyedia (Provider) untuk membungkus seluruh aplikasi agar bisa akses data buku
export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]); // Menyimpan daftar semua buku
  const [filter, setFilter] = useState({ status: 'all', search: '' }); // Menyimpan filter pencarian buku

  // Saat aplikasi pertama kali dijalankan, ambil data buku dari localStorage (jika ada)
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(savedBooks);
  }, []);

  // Fungsi untuk menambah buku baru dan menyimpannya ke localStorage
  const addBook = (book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  // Fungsi untuk menghapus buku berdasarkan ID
  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  // Fungsi untuk memperbarui informasi buku
  const updateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  // Menyediakan semua data dan fungsi kepada komponen lain yang membutuhkan
  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook, filter, setFilter }}>
      {children}
    </BookContext.Provider>
  );
};

// Custom hook agar komponen lain lebih mudah mengakses context ini
export const useBooks = () => useContext(BookContext);