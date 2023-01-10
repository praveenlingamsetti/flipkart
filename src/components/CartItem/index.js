// import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
// import {AiFillCloseCircle} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import CartContext from '../../Context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {deleteCartItem} = value
      const {cartItemDetails} = props
      const {id, url, description, brand} = cartItemDetailsgit
      const onDeleteCartItem = () => {
        deleteCartItem(id)
      }

      return (
        <div className="each-cart-container">
          <img className="each-cart-img" src={url} alt="img" />
          <div className="each-cart-content ">
            <p>{brand}</p>
            <p>{description}</p>
          </div>
          <div>
            <button type="button" onClick={onDeleteCartItem}>
              <AiFillDelete className="delete-icon" />
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
