import { useContext } from 'react'
import UserContext from '../context/UserContext'

const ComponentThree = ({ token }) => {
  const nombre = useContext(UserContext)
  console.log(nombre)
  return <div>{token}</div>
}

export default ComponentThree
