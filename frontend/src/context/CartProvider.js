import CartContext from './CartContext'
import { useReducer } from 'react'
import cartReducers from './CartReducers'

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducers, { cart: [], qty: 0 })

  const addToCart = (item, qty) => {
    dispatch({ type: 'ADD', payload: { item, qty } })
  }

  const deleteFromCart = (id) => {
    dispatch({ type: 'DELETE', payload: id })
  }

  const cleanCart = () => {
    dispatch({ type: 'CLEAN' })
  }

  const recoverFromLS = () => {
    dispatch({ type: 'RECOVER' })
  }

  return (
    <CartContext.Provider value={{ cartState, addToCart, deleteFromCart, cleanCart, recoverFromLS }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
