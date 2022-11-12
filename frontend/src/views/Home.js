import { useEffect } from 'react'
import ComponentOne from '../components/ComponentOne'

const Home = ({ token }) => {
  useEffect(() => {
    document.title = 'Inicio'
  }, [])
  return (
    <div>
      <ComponentOne token={token} />
    </div>
  )
}

export default Home
