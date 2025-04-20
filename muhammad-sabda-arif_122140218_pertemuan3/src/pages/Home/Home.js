import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';

const Home = () => {
  const [editingBook, setEditingBook] = useState(null);

  const handleFinishForm = () => {
    setEditingBook(null);
  };

  return (
    <div>
      <h1>Aplikasi Manajemen Buku</h1>
      <p>
        Dengan aplikasi ini, Anda dapat menambah, mengedit, dan mengelola koleksi buku pribadi Anda dengan mudah.
      </p>

      {/* Penjelasan untuk form buku */}
      <section>
        <h2>Tambah atau Edit Buku</h2>
        <p>
          Gunakan form di bawah ini untuk menambah buku baru ke dalam koleksi Anda, atau mengedit detail buku yang sudah ada.
        </p>
        <BookForm editingBook={editingBook} onFinish={handleFinishForm} />
      </section>

      {/* Penjelasan untuk filter buku */}
      <section>
        <h2>Filter Buku</h2>
        <p>
          Anda dapat menyaring buku berdasarkan status seperti "Sedang Dibaca", "Selesai Dibaca", atau "Ingin Dibaca". 
          Ini akan membantu Anda untuk lebih mudah mengelola koleksi buku Anda.
        </p>
        <BookFilter />
      </section>

      {/* Penjelasan untuk daftar buku */}
      <section>
        <h2>Daftar Buku Anda</h2>
        <p>
          Di sini Anda dapat melihat semua buku yang telah Anda tambahkan ke dalam koleksi Anda. Anda juga dapat mengedit atau menghapus buku dari daftar ini.
        </p>
        <BookList onEdit={setEditingBook} />
      </section>
    </div>
  );
};

export default Home;