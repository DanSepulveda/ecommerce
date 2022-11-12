import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
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
    <Box sx={{ backgroundColor: '#ccc', minHeight: '100vh' }}>
      <Stack gap={3}>
        <h1>{tag === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}</h1>
        <TextField
          id="outlined-basic"
          label="Correo"
          variant="outlined"
          size="small"
          name="correo"
          onChange={(e) => handleInput(e)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          name="password"
          type="password"
          onChange={(e) => handleInput(e)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSign}
        >
          {tag === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
        </Button>
        <Link to={tag === 'login' ? '/signup' : '/login'}>
          {tag === 'login' ? 'Crear cuenta' : 'Iniciar sesión'}
        </Link>
      </Stack>
    </Box>
  )
}

export default Login
