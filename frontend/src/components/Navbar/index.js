import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { SiBigcartel } from 'react-icons/si'
import { MdShoppingCart } from 'react-icons/md'
import UserContext from '../../context/UserContext'

const Navbar = () => {
  const cartContext = useContext(CartContext)
  const userContext = useContext(UserContext)

  const navItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Productos', path: '/productos' }
  ]

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <SiBigcartel />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <Link to={item.path} className="nav-link">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-light">
            {userContext.userState.token ? <li onClick={() => userContext.logout()}>Cerrar sesión</li> : null}
            {!userContext.userState.token ? (
              <li>
                <Link to="/login">Inicia sesión</Link>
              </li>
            ) : null}
            <li>
              <Link to="/cart">
                <button type="button" className="btn btn-dark">
                  <MdShoppingCart /> <span className="badge">{cartContext.cartState.qty}</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
