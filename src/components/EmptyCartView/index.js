import CartContext from '../../Context/CartContext'

import './index.css'

const EachItem = props => (
  <CartContext.Consumer>
    {value => {
      const {details} = props
      const {description, url, brand} = details
      const {addCartItem} = value

      const onAdd = () => {
        addCartItem(details)
      }

      return (
        <>
          <div className="item-card">
            <img className="item-img" src={url} alt="product" />
            <div className="item-content">
              <h2>{brand}</h2>
              <p>{description}</p>
              <button className="button" onClick={onAdd} type="button">
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default EachItem
