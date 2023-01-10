import React from 'react'

const CartContext = React.createContext({
  crtList: [
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
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext
