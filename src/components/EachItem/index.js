import './index.css'

const EachItem = props => {
  const {details, onAddToCart, add} = props
  const {id, description, url, brand} = details

  const onAdd = () => {
    onAddToCart(id)
    add()
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
}

export default EachItem
