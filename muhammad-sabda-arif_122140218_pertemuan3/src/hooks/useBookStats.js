import { useMemo } from 'react';
import { useBooks } from '../context/BookContext';

export const useBookStats = () => {
  const { books } = useBooks();

  return useMemo(() => {
    const owned = books.filter((b) => b.status === 'owned').length;
    const reading = books.filter((b) => b.status === 'reading').length;
    const wishlist = books.filter((b) => b.status === 'wishlist').length;
    const total = books.length;

    return { total, owned, reading, wishlist };
  }, [books]);
};