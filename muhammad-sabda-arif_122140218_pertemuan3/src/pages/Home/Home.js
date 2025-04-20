import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';

const Home = () => {
  const [editingBook, setEditingBook] = useState(null); // Menyimpan buku yang sedang diedit

  // Fungsi untuk mengakhiri proses edit
  const handleFinishForm = () => {
    setEditingBook(null); // Setelah disimpan, kembali ke mode tambah
  };

  return (
    <div>
      {/* Judul halaman utama */}
      <h1 className="text-3xl font-bold mb-2">Aplikasi Manajemen Buku</h1>
      <p className="mb-6">
        Aplikasi ini membantu Anda mencatat, menyimpan, dan mengelola koleksi buku pribadi secara praktis. Anda bisa menambahkan buku baru, mengedit informasi buku yang sudah ada, menyaring berdasarkan status bacaan, dan menghapus buku yang tidak lagi dibutuhkan.
      </p>

      {/* Bagian Form Tambah/Edit Buku */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1">Tambah atau Edit Buku</h2>
        <p className="mb-4">
          Untuk menambahkan buku baru, isi formulir di bawah. Jika ingin mengubah buku yang sudah ada, klik tombol <strong>Edit</strong> dan lakukan perubahan.
        </p>
        {/* Komponen Form Buku */}
        <BookForm editingBook={editingBook} onFinish={handleFinishForm} />
      </section>

      {/* Bagian Filter Buku */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1">Filter Buku</h2>
        <p className="mb-4">
          Gunakan filter ini untuk menampilkan buku sesuai status baca atau berdasarkan judul tertentu.
        </p>
        {/* Komponen Filter Buku */}
        <BookFilter />
      </section>

      {/* Bagian Daftar Buku */}
      <section>
        <h2 className="text-2xl font-semibold mb-1">Daftar Buku Anda</h2>
        <p className="mb-4">
          Semua buku yang sudah ditambahkan akan ditampilkan di sini. Anda bisa mengedit atau menghapus buku dari daftar.
        </p>
        {/* Komponen Daftar Buku */}
        <BookList onEdit={setEditingBook} />
      </section>
    </div>
  );
};

export default Home;