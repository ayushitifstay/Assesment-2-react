import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import pgData from '../../data/pgData';
import styles from '../PGDetail/PGDetail.module.css'

const PGDetail = () => {
   const { id } = useParams();
  const navigate = useNavigate();

  const pg = pgData.find((item) => item.id === Number(id));

  if (!pg) {
    return <h2>PG Not Found</h2>;
  }
  return (
      <div className={styles.container}>
      <h1>{pg.name}</h1>

     
      <div className={styles.image}>Image Placeholder</div>

      <div className={styles.details}>
        <p><strong>Price:</strong> ₹{pg.price}</p>
        <p><strong>Gender:</strong> {pg.gender}</p>
        <p><strong>Rating:</strong> ⭐ {pg.rating}</p>
        <p><strong>Location:</strong> {pg.location}</p>
      </div>

      <button className={styles.button}>
        Book Now
      </button>

      <button onClick={() => navigate(-1)} className={styles.back}>
        Go Back
      </button>
    </div>
  )
}

export default PGDetail

