import UserContext from './UserContext'
import { useReducer } from 'react'
import userReducers from './userReducers'
import axios from 'axios'

const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducers, { token: null })

  const crearCuenta = async (user) => {
    try {
      const respuesta = await axios.post('http://localhost:4000/api/usuario', user)
      if (respuesta.data.success) {
        dispatch({ type: 'REGISTER', payload: respuesta.data.token })
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <UserContext.Provider value={{ userState, crearCuenta, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
