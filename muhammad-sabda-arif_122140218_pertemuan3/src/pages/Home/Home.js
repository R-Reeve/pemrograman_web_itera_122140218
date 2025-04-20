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
      <h1 className="text-3xl font-bold mb-2">Aplikasi Manajemen Buku</h1>
      <p className="mb-6">
        Aplikasi ini membantu Anda mencatat, menyimpan, dan mengelola koleksi buku pribadi secara praktis. Anda bisa menambahkan buku baru, mengedit informasi buku yang sudah ada, menyaring berdasarkan status bacaan, dan menghapus buku yang tidak lagi dibutuhkan.
      </p>

      {/* Form Tambah/Edit Buku */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1">Tambah atau Edit Buku</h2>
        <p className="mb-4">
          Untuk menambahkan buku baru, isi formulir di bawah dengan judul buku, nama penulis, dan pilih status baca (seperti “Sedang Dibaca” atau “Selesai Dibaca”). Setelah itu, klik tombol <strong>Simpan</strong> untuk menambahkan ke daftar. Jika ingin mengubah informasi buku yang sudah ada, klik tombol <strong>Edit</strong> pada daftar buku di bawah, maka data buku akan muncul otomatis di formulir. Setelah melakukan perubahan, klik <strong>Simpan</strong> kembali untuk memperbaruinya.
        </p>
        <BookForm editingBook={editingBook} onFinish={handleFinishForm} />
      </section>

      {/* Filter Buku */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1">Filter Buku</h2>
        <p className="mb-4">
          Anda bisa menggunakan fitur filter untuk menyaring buku berdasarkan status bacaan. Pilih kategori seperti “Sedang Dibaca”, “Selesai Dibaca”, atau “Ingin Dibaca” untuk hanya menampilkan buku sesuai pilihan Anda. Jika ingin menampilkan semua buku kembali, cukup pilih opsi “Semua”. Fitur ini membantu Anda melihat daftar buku dengan lebih tertata sesuai kebutuhan.
        </p>
        <BookFilter />
      </section>

      {/* Daftar Buku */}
      <section>
        <h2 className="text-2xl font-semibold mb-1">Daftar Buku Anda</h2>
        <p className="mb-4">
          Semua buku yang Anda tambahkan akan muncul di bagian ini. Setiap buku ditampilkan lengkap dengan judul, penulis, dan status bacaan. Anda bisa mengedit informasi buku dengan klik tombol <strong>Edit</strong>, atau menghapus buku dengan klik tombol <strong>Hapus</strong>. Daftar ini terus diperbarui setiap kali Anda menambah, mengubah, atau menghapus buku.
        </p>
        <BookList onEdit={setEditingBook} />
      </section>
    </div>
  );
};

export default Home;