import React, { useReducer } from 'react'

import ShopContext from './shop-context'
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers'
import productData from '../data/productData'

const GlobalState = (props) => {
  const products = productData
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] })

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product })
  }

  const removeProductFromCart = (product) => {
    dispatch({ type: REMOVE_PRODUCT, product: product })
  }

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  )
}

export default GlobalState
