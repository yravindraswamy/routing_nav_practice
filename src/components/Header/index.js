import {Link} from 'react-router-dom'
// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="nav-logo"
        alt="wave"
      />
      <h1 className="nav-heading">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
