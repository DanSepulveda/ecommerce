import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = ({ tag }) => {
  const state = useContext(UserContext)
  console.log(state)
  const [user, setUser] = useState({})
  useEffect(() => {
    document.title = tag === 'login' ? 'Iniciar sesión' : 'Registro'
  }, [tag])

  const iniciarSesion = () => {
    console.log('iniciar')
  }

  const handleSign = () => {
    if (tag === 'login') iniciarSesion()
    else state.crearCuenta(user)
  }

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container d-flex flex-column justify-content-center py-5">
      <h1 className="text-center mb-4">{tag === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Correo"
          aria-label="Correo"
          aria-describedby="basic-addon1"
          name="correo"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          aria-label="Password"
          name="password"
          aria-describedby="basic-addon1"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <button className="btn btn-dark" onClick={handleSign}>
        {tag === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
      </button>
      <Link to={tag === 'login' ? '/signup' : '/login'} className="text-center mt-4">
        {tag === 'login' ? 'Crear cuenta' : 'Iniciar sesión'}
      </Link>
    </div>
  )
}

export default Login
