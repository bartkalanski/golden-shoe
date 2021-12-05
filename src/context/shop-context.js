import React from 'react'
import productData from '../data/productData'

export default React.createContext({
  products: productData,
  cart: [],
  total: 0,
  addProductToCart: (product) => {},
  removeProductFromCart: (product) => {},
})
