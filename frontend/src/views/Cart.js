import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import ProductBox from '../components/ProductBox'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const context = useContext(CartContext)
  const userContext = useContext(UserContext)
  const { qty, cart } = context.cartState

  return (
    <div className="container-fluid d-flex flex-column align-items-center products-container py-5">
      <h1 className="mb-4">Productos en tu carro ({qty})</h1>
      <div className="container">
        {cart.map((el) => (
          <ProductBox item={el} key={el._id} />
        ))}
      </div>
      <Link to={userContext.userState.token ? '/checkout' : '/login'}>Finalizar compra</Link>
    </div>
  )
}

export default Cart
