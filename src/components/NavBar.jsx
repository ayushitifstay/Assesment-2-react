import React from 'react'
import styles from '../components/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
      <h2 className={styles.logo}>Tifstay</h2>

      <div className={styles.links}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/pg" className={styles.link}>PG</Link>
        <Link to="/tiffin" className={styles.link}>Tiffin</Link>
        <Link to="/cart" className={styles.link}>Cart</Link>
        <Link to="/login" className={styles.link}>Login</Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
