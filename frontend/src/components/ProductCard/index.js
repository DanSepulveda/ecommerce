import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import formatter from '../../utils/formatPrice'

const ProductCard = ({ item }) => {
  const context = useContext(CartContext)
  const [qty, setQty] = useState(1)
  const { imageUrl, name, stock, price, _id } = item

  const reducir = () => {
    if (qty >= 2) {
      setQty(qty - 1)
    }
  }

  const aumentar = () => {
    if (qty < stock) {
      setQty(qty + 1)
    }
  }

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="" />
        <div className="card-body d-flex flex-column align-items-center">
          <Link to={`/producto/${_id}`}>
            <h5 className="card-title">{name}</h5>
          </Link>
          <p className="card-text">{formatter.format(price)}</p>
          {stock ? (
            <div className="d-flex align-items-center qty-container">
              <button onClick={reducir} disabled={qty === 1}>
                <MdRemoveCircle />
              </button>
              <span className="my-2 text-center">{qty}</span>
              <button onClick={aumentar} disabled={qty === stock}>
                <MdAddCircle />
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center qty-container">
              <p className="text-danger fw-semibold">Sin stock</p>
            </div>
          )}

          <button
            onClick={() => context.addToCart(item, qty)}
            disabled={!(stock > 0)}
            className="btn btn-primary btn-sm btn-dark"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
