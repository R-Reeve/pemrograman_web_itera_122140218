import { useState, useEffect } from 'react';

// Custom hook untuk menyimpan dan membaca data dari localStorage
function useLocalStorage(key, initialValue) {
  // Ambil data awal dari localStorage (jika ada), jika tidak ada pakai nilai default
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Setiap kali nilai berubah, simpan ulang ke localStorage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  // Mengembalikan nilai yang tersimpan dan fungsi untuk mengubahnya
  return [storedValue, setStoredValue];
}

export default useLocalStorage;