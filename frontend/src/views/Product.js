import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  const obtenerProducto = async () => {
    const respuesta = await axios.get(`https://ecommerce-udd.herokuapp.com/api/product/${id}`)
    setProduct(respuesta.data.product)
  }

  useEffect(() => {
    obtenerProducto()
  }, [])

  return <div>Product</div>
}

export default Product
