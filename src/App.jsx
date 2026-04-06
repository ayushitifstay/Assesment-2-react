import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PGList from './pages/PGList/PGList'
import PGDetail from './pages/PGDetail/PGDetail'
import TiffinList from './pages/TiffinList/TiffinList'
import TiffinDetal from './pages/TiffinDetail/TiffinDetail'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Checkout from './pages/Checkout/Checkout'
import NotFound from './pages/NotFound/NotFound'
import Navbar from './components/NavBar'
import ProtectedRoute from './routes/ProtectedRoute'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pg" element={<PGList />} />
      <Route path="/pg/:id" element={<PGDetail />} />
      <Route path="/tiffin" element={<TiffinList />} />
      <Route path="/tiffin/:id" element={<TiffinDetal/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<Login />} />

      <Route 
      path ='/checkout'
      element={
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      }
      />

      <Route path='*' element={<NotFound />}  />
      </Routes>
    </div>
  )
}

export default App
