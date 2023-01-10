// import CartItem from '../CartItem'
// import CartContext from '../../Context/CartContext'
import Header from '../Header'
import CartListView from '../CartListView'
import './index.css'

const Cart = () => (
  <>
    <Header className="h" />
    <div className="card-container">
      <div className="card-content-container">
        <h1 className="cart-heading">My Cart</h1>
        <CartListView />
      </div>
    </div>
  </>
)

export default Cart
