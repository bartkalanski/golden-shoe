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
    setSubTotalPrice(context.cart.reduce(
      (previousVal, currentVal) => {
        return previousVal + (currentVal.price * currentVal.quantity)},
      0
    ))
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
    <>
      <Container>
        <h1 className='my-5' style={{ fontWeight: 'normal', fontSize: '3rem' }}>
          {!context.cart.length
            ? 'Your shopping bag is empty'
            : 'Shopping Cart'}
        </h1>
      </Container>
      <div style={{ width: '100vw', borderBottom: '1px solid lightgray' }} />
      <Container className='mb-5'>
      {!context.cart.length && (
          <h2
            className='h3 text-center'
            style={{
              marginTop: '6rem',
              marginBottom: '6rem',
              textDecoration: 'none',
            }}
          >
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: '#FA817A',
              }}
            >
              Continue Shopping
            </Link>
          </h2>
        )}
        {context.cart.length ? (
          <Row>
            <Col md={8} className='mt-5 cart'>
              {context.cart.map((product) => (
                <Row
                  className='border-bottom'
                  key={`Cart-product-${product.name}`}
                >
                  <div className='row main align-items-center'>
                    <Col xs={3}>
                      <img
                        className='img-fluid my-2'
                        src={product.img}
                        alt={product.name}
                      />
                    </Col>
                    <Col>
                      <div className='row text-muted'>{product.name}</div>
                      <div className='row'>{product.colour}</div>
                      <div className='row'>Size {product.size}</div>
                    </Col>
                    <Col>
                      <InputGroup className='d-flex flex-row'>
                        <Button
                          type='button'
                          variant='light'
                          style={{ border: '1px solid lightgray' }}
                          onClick={() => handleRemove(product)}
                        >
                          -
                        </Button>
                        <FormControl
                          type='text'
                          name='quantity'
                          class='form-control'
                          value={product.quantity}
                          min='1'
                          max='100'
                          style={{ maxWidth: '2.25rem' }}
                        />
                        <Button
                          type='button'
                          variant='light'
                          style={{ border: '1px solid lightgray' }}
                          onClick={() => handleIncrement(product)}
                        >
                          +
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col className='col'>
                      <span>£ {product.price}</span>
                      <Button
                        type='button'
                        onClick={() => handleRemove(product)}
                        style={{
                          background: 'white',
                          border: 'none',
                          marginLeft: '4rem',
                          color: '#FF1F1F',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                      >
                        Remove
                      </Button>
                    </Col>
                  </div>
                </Row>
              ))}
            </Col>

            <Col md={4} className='mt-5 summary'>
              <Container>
                <Row className='px-2 mb-3'>
                  <Col
                    className='d-flex flex-row justify-content-between'
                    style={{
                      fontSize: '1rem',
                    }}
                  >
                    <span
                      style={{
                        color: '#525252',
                      }}
                    >
                      Subtotal
                    </span>
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
                <Col
                  className='px-2 d-flex flex-row justify-content-between'
                  style={{
                    fontSize: '1.4rem',
                  }}
                >
                  <span
                    style={{
                      color: '#525252',
                    }}
                  >
                    Total
                  </span>
                  <span className='text-bold'>£ {totalPrice}</span>
                </Col>
                <hr />
                <Row className='px-2 mt-3'>
                  <Col>
                    <span
                      className='mr-3'
                      style={{ color: '#525252', marginRight: '.5rem' }}
                    >
                      Estimated delivery date is
                    </span>
                    <span
                      style={{
                        letterSpacing: '1.5px',
                        borderBottom: '1px solid #525252s',
                      }}
                    >
                      {deliveryFormattedDate()}
                    </span>
                  </Col>
                  <Button
                    className='my-3'
                    type='submit'
                    style={{ background: '#FA817A', border: 'none' }}
                  >
                    CHECKOUT NOW
                  </Button>
                </Row>
              </Container>
            </Col>
          </Row>
        ) : undefined}
      </Container>
    </>
  )
}

export default CartScreen
