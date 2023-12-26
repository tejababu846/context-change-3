import React from 'react'

const cartContext = React.createContext({
  cartList: [
    {
      title: 'BRAND NO.1',
      brand: 'Teja Gulagani',
      id: 1001,
      imageUrl:
        'https://media-content.ccbp.in/ccbp_prod/media/profile_pic/4c510fb0-e59e-403c-8dc0-12a781df1e90.jpeg',
      price: 500000,
      quantity: 5,
    },
    {
      title: 'Product 2',
      brand: 'Brand Name',
      id: 1002,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
      price: 760,
      quantity: 2,
    },
  ],
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default cartContext
