import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import formatter from '../../utils/formatPrice'

const ProductBox = ({ item }) => {
  const { name, imageUrl, qty, _id, price } = item
  const context = useContext(CartContext)

  return (
    <div className="d-flex shadow-sm bg-white rounded p-1 align-items-center mb-2">
      <img src={imageUrl} alt="" width={100} />
      <p className="name flex-grow-1 fw-semibold">{name}</p>
      <p className="me-3 fs-5 fw-semi-bold">{`${qty} * ${formatter.format(price)} = ${formatter.format(
        qty * price
      )}`}</p>
      <button onClick={() => context.deleteFromCart(_id)} className="btn btn-danger">
        Eliminar
      </button>
    </div>
  )
}

export default ProductBox
