import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import ProductBox from '../components/ProductBox'
// import UserContext from '../context/UserContext'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {
  const context = useContext(CartContext)
  const navigate = useNavigate()
  // const userContext = useContext(UserContext)
  const { qty, cart } = context.cartState

  const reducirStock = async () => {
    try {
      const respuesta = await axios.put('https://ecommerce-udd.herokuapp.com/api/products/reduce', { cart })
      console.log(respuesta)
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className="container-fluid d-flex flex-column align-items-center products-container py-5">
      <h1 className="mb-4">Productos en tu carro ({qty})</h1>
      <div className="container">
        {cart.map((el) => (
          <ProductBox item={el} key={el._id} />
        ))}
        {cart.length ? (
          <PayPalButtons
            createOrder={(data, actions) => {
              console.log('creando orden')
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: '1.99',
                      currency_code: 'CL'
                    }
                  }
                ]
              })
            }}
            onApprove={(data, actions) => {
              console.log('orden completada')
              return actions.order.capture().then((details) => {
                console.log(details)
                const name = details.payer.name.given_name
                context.cleanCart()
                reducirStock()
                navigate('/')
              })
            }}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Cart
