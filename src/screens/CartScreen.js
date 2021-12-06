import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap'

import ShopContext from '../context/shop-context'
import { deliveryFormattedDate } from '../helpers/helpers'

const CartScreen = () => {
  const [deliveryPrice, setDeliveryPrice] = useState(3)
  const [subTotalPrice, setSubTotalPrice] = useState(0)
  const context = useContext(ShopContext)

  useEffect(() => {
    setSubTotalPrice(
      context.cart.reduce((previousVal, currentVal) => {
        return previousVal + currentVal.price * currentVal.quantity
      }, 0)
    )
  }, [context])

  const totalPrice = subTotalPrice + deliveryPrice

  const handleIncrement = (product) => {
    context.addProductToCart({ ...product, quantity: product.quantity + 1 })
  }

  const handleRemove = (product) => {
    context.removeProductFromCart(product)
  }

  const handleShippingChange = (event) => {
    setDeliveryPrice(Number(event.target.value))
  }

  return (
    <div className='cart'>
      <Container>
        <h1 className='my-5'>
          {!context.cart.length
            ? 'Your shopping bag is empty'
            : 'Shopping Cart'}
        </h1>
      </Container>
      <hr />
      <Container className='mb-5'>
        {!context.cart.length && (
          <h2 className='h3 text-center'>
            <Link to='/' className='cart__continue-link'>
              Continue Shopping
            </Link>
          </h2>
        )}
        {context.cart.length ? (
          <Row>
            <Col md={8} className='mt-3 mt-md-5 cart'>
              {context.cart.map((product) => (
                <Row
                  className='border-bottom my-1 d-flex flex-row'
                  key={`Cart-product-${product.name}`}
                >
                  <Col xs={6} sm={4} lg={3}>
                    <img
                      className='img-fluid my-2'
                      src={product.img}
                      alt={product.name}
                    />
                  </Col>
                  <Col xs={6} sm={8} lg={9}>
                    <Row className='justify-content-center align-items-center mt-xl-5'>
                      <Col xs={12} lg={3}>
                        <div className='text-muted'>{product.name}</div>
                        <div>{product.colour}</div>
                        <div>Size {product.size}</div>
                        <span>£ {product.price}</span>
                      </Col>
                      <Col xs={12} lg={3}>
                        <InputGroup className='d-flex flex-row cart__quantity-container'>
                          <Button
                            type='button'
                            variant='light'
                            className='cart__quantity-btn'
                            onClick={() => handleRemove(product)}
                          >
                            -
                          </Button>
                          <FormControl
                            type='text'
                            name='quantity'
                            className='cart__quantity-input form-control '
                            value={product.quantity}
                            min='1'
                            max='100'
                          />
                          <Button
                            type='button'
                            variant='light'
                            className='cart__quantity-btn'
                            onClick={() => handleIncrement(product)}
                          >
                            +
                          </Button>
                        </InputGroup>
                      </Col>
                      <Col xs={12} lg={3}>
                        <Button
                          type='button'
                          className='cart__remove-btn'
                          onClick={() => handleRemove(product)}
                        >
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </Col>

            <Col md={4} className='mt-5 summary'>
              <Container>
                <Row className='px-2 mb-3'>
                  <Col className='d-flex flex-row justify-content-between'>
                    <span className='cart__subtotal'>Subtotal</span>
                    <span className='text-bold'>£ {subTotalPrice}</span>
                  </Col>
                </Row>
                <hr />
                <Form className='px-2 mb-3'>
                  <Form.Group className='mb-3' controlId='Delivery'>
                    <Form.Label>Shipping</Form.Label>
                    <Form.Select
                      aria-label='Default select example'
                      onChange={handleShippingChange}
                    >
                      <option className='text-muted' value='3'>
                        Standard-Delivery - £3.00
                      </option>
                      <option className='text-muted' value='5'>
                        Premium-Delivery - £5.00
                      </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formDiscountCode'>
                    <Form.Label>Discount Code</Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>
                </Form>
                <Col className='px-2 d-flex flex-row justify-content-between cart__total-font'>
                  <span className='cart__total'>Total</span>
                  <span className='text-bold'>£ {totalPrice}</span>
                </Col>
                <hr />
                <Row className='px-2 mt-3'>
                  <Col>
                    <span className='cart-checkout mr-3'>
                      Estimated delivery date is
                    </span>
                    <span className='cart__checkout-date'>
                      {deliveryFormattedDate()}
                    </span>
                  </Col>
                  <Button className='cart__checkout-btn my-3' type='submit'>
                    CHECKOUT NOW
                  </Button>
                </Row>
              </Container>
            </Col>
          </Row>
        ) : undefined}
      </Container>
    </div>
  )
}

export default CartScreen
