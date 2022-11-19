const cartReducers = (state, action) => {
  const { type, payload } = action

  const getQty = (cart) => {
    const qty = cart.reduce((acc, total) => {
      return acc + Number(total.qty)
    }, 0)
    return qty
  }

  switch (type) {
    case 'ADD':
      console.log(state.cart)
      console.log(payload.item)
      if (state.cart.some((el) => el._id === payload.item._id)) {
        state.cart.forEach((el) => {
          if (el._id === payload.item._id) {
            el.qty = payload.qty
          }
        })
      } else {
        state.cart.push({ ...payload.item, qty: payload.qty })
      }
      return { cart: state.cart, qty: getQty(state.cart) }
    case 'DELETE':
      const resultado = state.cart.filter((el) => el._id !== payload)
      return {
        cart: resultado,
        qty: getQty(resultado)
      }

    default:
      return state
  }
}

export default cartReducers
