// import Component from 'react'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'

import CartContext from './Context/CartContext'
import Home from './components/Home'
import Cart from './components/Cart'

import './App.css'

class App extends Component {
  state = {
    cartList: [
      {
        id: '1',
        url:
          'https://i.postimg.cc/tTxL96BT/Whats-App-Image-2023-01-05-at-4-16-28-PM-1.jpg',
        brand: 'boat',
        description:
          'boat strom call 1.69 inch HD display with bluetooth calling',
      },
      {
        id: '2',
        url:
          'https://i.postimg.cc/mgSZGvtq/Whats-App-Image-2023-01-05-at-4-16-27-PM.jpg',
        brand: 'realme',
        description:
          'realme watch 3 1.8 inch Horizon curved Design with bluetooth',
      },
    ],
  }

  addCartItem = product => {
    this.setState(prevState => ({
      cartList: [...prevState.cartList, product],
    }))
  }

  deleteCartItem = () => {}

  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          deleteCartItem: this.deleteCartItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />

          <Route exact path="/cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    )
  }
}
export default App
