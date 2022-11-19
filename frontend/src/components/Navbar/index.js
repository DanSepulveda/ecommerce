import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { SiBigcartel } from 'react-icons/si'
import { MdShoppingCart } from 'react-icons/md'

const Navbar = () => {
  const cartContext = useContext(CartContext)

  const navItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Productos', path: '/productos' }
  ]

  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <SiBigcartel />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li class="nav-item">
                <Link to={item.path} key={item.path} className="nav-link">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <Link to="/cart">
              <button type="button" class="btn btn-dark">
                <MdShoppingCart /> <span class="badge">{cartContext.cartState.qty}</span>
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
