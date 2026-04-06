import React, { useState } from 'react'
import pgData from '../../data/pgData';
import styles from '../PGList/PGList.module.css'
import { useNavigate } from 'react-router-dom';

const PGList = () => {
  const navigate= useNavigate();
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [sort, setSort] = useState("");

  let filteredData = pgData.filter((pg) =>
    pg.name.toLowerCase().includes(search.toLowerCase())
  );

  if (gender !== "all") {
    filteredData = filteredData.filter((pg) => pg.gender === gender);
  }

  if (sort === "price") {
    filteredData.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filteredData.sort((a, b) => b.rating - a.rating);
  }
  return (
     <div className={styles.container}>
      <h2>PG Listings</h2>

    
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search PG..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setGender(e.target.value)}>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>

    
      <div className={styles.grid}>
        {filteredData.map((pg) => (
          <div key={pg.id} className={styles.card}
          onClick={() => navigate(`/pg/${pg.id}`)}>
            <h3>{pg.name}</h3>
            <p>₹{pg.price}</p>
            <p>{pg.gender}</p>
            <p>⭐ {pg.rating}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PGList