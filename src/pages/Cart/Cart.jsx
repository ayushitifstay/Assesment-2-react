import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import styles from '../Cart/Cart.module.css'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h2 className={styles.empty}>Cart is empty</h2>;
  }
  return (
     <div className={styles.container}>
      <h2>Your Cart</h2>

      {cart.map((item, index) => (
        <div key={index} className={styles.card}>
          <h3>{item.provider}</h3>
          <p>{item.plan}</p>
          <p>₹{item.price}</p>

          <div className={styles.qty}>
            <button
              onClick={() =>
                updateQuantity(index, item.quantity - 1)
              }
              disabled={item.quantity <= 1}
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                updateQuantity(index, item.quantity + 1)
              }
            >
              +
            </button>
          </div>

          <button
            className={styles.remove}
            onClick={() => removeFromCart(index)}
          >
            Remove
          </button>
        </div>
      ))}

  
      <h3>Total: Rs{total}</h3>

      <button
        className={styles.checkout}
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Cart
