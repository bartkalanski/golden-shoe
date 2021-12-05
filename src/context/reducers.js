export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  )
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 })
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    }
    updatedItem.quantity++
    updatedCart[updatedItemIndex] = updatedItem
  }

  return { ...state, cart: updatedCart }
}

const removeProductFromCart = (product, state) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex((item) => {
    if (product) return item.id === product.id && item.size === product.size
  })
  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  }
  updatedItem.quantity--
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1)
  } else {
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, cart: updatedCart }
}

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state)
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.product, state)
    default:
      return state
  }
}
