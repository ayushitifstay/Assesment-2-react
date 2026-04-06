import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../TiffinList/TiffinList.module.css'

const TiffinList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((res) => {
      
        const updated = res.map((item) => ({
          ...item,
          type: Math.random() > 0.5 ? "veg" : "non-veg",
        }));
        setData(updated);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  let filteredData = data;
  if (filter !== "all") {
    filteredData = data.filter((item) => item.type === filter);
  }

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  return (
     <div className={styles.container}>
      <h2>Tiffin Services</h2>


      <div className={styles.filter}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("veg")}>Veg</button>
        <button onClick={() => setFilter("non-veg")}>Non-Veg</button>
      </div>

  
      <div className={styles.grid}>
        {filteredData.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => navigate(`/tiffin/${item.id}`)}
          >
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p><strong>{item.type}</strong></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TiffinList