import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import styles from '../Checkout/Checkout.module.css'

const Checkout = () => {
   const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.address) {
      alert("Please fill all fields");
      return;
    }

    alert("Order placed successfully!");

    clearCart();
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
   <div className={styles.container}>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />

        <button type="submit">Place Order</button>
      </form>

      <div className={styles.summary}>
        <h3>Order Summary</h3>
        {cart.map((item, i) => (
          <p key={i}>
            {item.plan} * {item.quantity}
          </p>
        ))}
        <h4>Total: Rs{total}</h4>
      </div>
    </div>
  )
}

export default Checkout