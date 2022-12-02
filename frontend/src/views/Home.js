import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const Home = () => {
  const context = useContext(UserContext)
  useEffect(() => {
    document.title = 'Inicio'
    obtenerTop10()
  }, [])
  const [products, setProducts] = useState([])

  const obtenerTop10 = async () => {
    try {
      const respuesta = await axios.get('https://ecommerce-udd.herokuapp.com/api/productos/8')
      const { success, products } = respuesta.data

      if (success) {
        setProducts(products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="products-container py-5">
      <h1 className="text-center mb-4">Productos destacados</h1>
      <div className="container">
        <div className="row g-3">
          {products.map((el) => (
            <ProductCard key={el._id} item={el} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
