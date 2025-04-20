// Import hook useMemo dari React untuk mengoptimalkan performa
import { useMemo } from 'react';
// Import context yang menyimpan data buku
import { useBooks } from '../context/BookContext';

// Hook ini digunakan untuk menghitung statistik jumlah buku
export const useBookStats = () => {
  // Ambil data semua buku dari context
  const { books } = useBooks();

  // Gunakan useMemo agar perhitungan hanya dilakukan jika data books berubah
  return useMemo(() => {
    // Hitung jumlah buku yang statusnya 'owned' (dimiliki)
    const owned = books.filter((b) => b.status === 'owned').length;
    // Hitung jumlah buku yang sedang dibaca
    const reading = books.filter((b) => b.status === 'reading').length;
    // Hitung jumlah buku yang masuk ke wishlist (ingin dibeli)
    const wishlist = books.filter((b) => b.status === 'wishlist').length;
    // Hitung total semua buku
    const total = books.length;

    // Kembalikan data statistik dalam bentuk objek
    return { total, owned, reading, wishlist };
  }, [books]); // Perhitungan akan diperbarui jika data books berubah
};