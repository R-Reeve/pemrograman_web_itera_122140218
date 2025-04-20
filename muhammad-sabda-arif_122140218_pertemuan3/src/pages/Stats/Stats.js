import React from 'react';
import { useBookStats } from '../../hooks/useBookStats';

const Stats = () => {
  const { total, owned, reading, wishlist } = useBookStats();

  return (
    <div className="stats-container">
      <h1>Statistik Buku</h1>
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Total Buku</h3>
          <p>{total}</p>
        </div>
        <div className="stat-card">
          <h3>Dimiliki</h3>
          <p>{owned}</p>
        </div>
        <div className="stat-card">
          <h3>Sedang Dibaca</h3>
          <p>{reading}</p>
        </div>
        <div className="stat-card">
          <h3>Ingin Dibeli</h3>
          <p>{wishlist}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
