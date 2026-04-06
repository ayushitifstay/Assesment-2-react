import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default NotFound