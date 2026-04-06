import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import styles from '../TiffinDetail/TiffinDetail.module.css'

const TiffinDetail = () => {
   const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [id]);

  if (!data) return <h2>Loading...</h2>;

 
  const plans = [
    { name: "Daily Plan", price: 100 },
    { name: "Weekly Plan", price: 600 },
    { name: "Monthly Plan", price: 2000 },
  ];
  return (
    <div className={styles.container}>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.phone}</p>

      <h2>Subscription Plans</h2>

      <div className={styles.plans}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.card}>
            <h3>{plan.name}</h3>
            <p>₹{plan.price}</p>

            <button
              onClick={() =>
                addToCart({
                  provider: data.name,
                  plan: plan.name,
                  price: plan.price,
                  quantity: 1,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TiffinDetail