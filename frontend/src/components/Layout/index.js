import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = () => {
  return (
    <main className="d-flex flex-column ">
      <Navbar />
      <div className="flex-grow-1 main">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default Layout
