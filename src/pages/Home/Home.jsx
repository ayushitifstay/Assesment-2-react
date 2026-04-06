import React, { useState } from 'react'
import styles from '../Home/Home.module.css'

import useDebounce from '../../Hooks/useDebounce'
import { useNavigate } from 'react-router-dom'
const Home = () => {
   const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find Your Stay & Meals</h1>

 
      <input
        type="text"
        placeholder="Search PG or Tiffin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />

     
      <div className={styles.buttons}>
        <button onClick={() => navigate("/pg")}>Browse PG</button>
        <button onClick={() => navigate("/tiffin")}>Browse Tiffin</button>
      </div>


      <div className={styles.cards}>
        <div className={styles.card}>PG in Pune</div>
        <div className={styles.card}>Affordable Rooms</div>
        <div className={styles.card}>Healthy Tiffins</div>
        <div className={styles.card}>Top Rated Services</div>
      </div>
    </div>
  )
}

export default Home