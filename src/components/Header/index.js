import {Link, withRouter} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwtToken')
    history.replace('/login')
  }

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img
            className="logo"
            src="https://i.postimg.cc/zDgYHJ2B/Flipkart-Image.jpg"
            alt="logo"
          />
        </Link>
      </div>

      <div className="options">
        <Link to="/">
          <p className="each-options">Home</p>
        </Link>
      </div>

      <div className="cart">
        <Link className="cart" to="/cart">
          <FiShoppingCart /> <span> Cart</span>
        </Link>
      </div>

      <div>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default withRouter(Header)
