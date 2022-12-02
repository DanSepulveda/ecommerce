import UserContext from './UserContext'
import { useReducer } from 'react'
import userReducers from './userReducers'
import axios from 'axios'
import Swal from 'sweetalert2'

const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducers, { token: null })

  const URL = 'https://ecommerce-udd.herokuapp.com/api'

  const crearCuenta = async (user) => {
    try {
      const respuesta = await axios.post(`${URL}/usuario`, user)
      if (respuesta.data.success) {
        Swal.fire({ title: 'Cuenta creada', icon: 'successs' })
        dispatch({ type: 'REGISTER', payload: respuesta.data.token })
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  const iniciarSesion = async (user) => {
    try {
      const respuesta = await axios.post(`${URL}/usuario/login`, user)
      console.log(respuesta)
      if (respuesta.data.success) {
        dispatch({ type: 'REGISTER', payload: { token: respuesta.data.token, admin: respuesta.data.admin } })
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  const validateToken = async () => {
    const token = localStorage.getItem('token')

    if (token) {
      const respuesta = await axios.get(`${URL}/usuario/login`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      if (respuesta.data.success) {
        dispatch({ type: 'REGISTER', payload: token })
      }
    }
  }

  return (
    <UserContext.Provider value={{ userState, crearCuenta, logout, iniciarSesion, validateToken }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
