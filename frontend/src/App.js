import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import { useContext } from 'react'
import UserContext from './context/UserContext'
import Layout from './components/Layout'
import Cart from './views/Cart'
import Product from './views/Product'
import NotFound from './views/NotFound'

function App() {
  const context = useContext(UserContext)
  const token = context.userState.token

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home token={token} />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login tag="login" />} />
        {!token && <Route path="/signup" element={<Login tag="register" />} />}
        <Route path="/not-found" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to={token ? '/' : '/not-found'} />} />
    </Routes>
  )
}

export default App
