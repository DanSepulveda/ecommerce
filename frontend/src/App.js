import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import { useContext, useState } from 'react'
import UserContext from './context/UserContext'

function App() {
  const context = useContext(UserContext)
  const token = context.userState.token

  return (
    <Routes>
      <Route
        path="/"
        element={<Home token={token} />}
      />
      <Route
        path="/login"
        element={<Login tag="login" />}
      />
      {!token && (
        <Route
          path="/signup"
          element={<Login tag="register" />}
        />
      )}
      <Route
        path="*"
        element={<Navigate to={token ? '/' : '/not-found'} />}
      />
    </Routes>
  )
}

export default App
