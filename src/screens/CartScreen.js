import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap'

const CartScreen = () => {
  const [itemsInBasket, setItemsInBasket] = useState(1)
  const someDate = new Date()
  const numberOfDaysToAdd = 3
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd)
  const dd = someDate.getDate()
  const mm = someDate.getMonth() + 1
  const y = someDate.getFullYear()

  const deliveryFormattedDate = dd + '/' + mm + '/' + y
  return (
    <>
      <Container>
        <h1 className='my-5' style={{ fontWeight: 'normal', fontSize: '3rem' }}>
          {!itemsInBasket ? 'Your shopping bag is empty' : 'Shopping Cart'}
        </h1>
      </Container>
      <div style={{ width: '100vw', borderBottom: '1px solid lightgray' }} />
      <Container className='mb-5'>
        {!itemsInBasket && (
          <h2
            className='h3 text-center'
            style={{
              marginTop: '6rem',
              marginBottom: '6rem',
              textDecoration: 'none',
            }}
          >
            <Link
              to='/productList'
              style={{
                textDecoration: 'none',
                color: '#FA817A',
              }}
            >
              Continue Shopping
            </Link>
          </h2>
        )}
        {itemsInBasket && (
          <Row>
            <Col md={8} className='mt-5 cart'>
              <Row className='border-bottom'>
                <div className='row main align-items-center'>
                  <Col xs={3}>
                    <img
                      className='img-fluid'
                      src='https://i.imgur.com/1GrakTl.jpg'
                    />
                  </Col>
                  <Col>
                    <div className='row text-muted'>Shirt</div>
                    <div className='row'>Cotton T-shirt</div>
                  </Col>
                  <Col>
                    <InputGroup className='d-flex flex-row'>
                      <Button
                        type='button'
                        variant='light'
                        style={{ border: '1px solid lightgray' }}
                      >
                        -
                      </Button>
                      <FormControl
                        type='text'
                        name='quantity'
                        class='form-control'
                        value='10'
                        min='1'
                        max='100'
                        style={{ maxWidth: '3rem' }}
                      />
                      <Button
                        type='button'
                        variant='light'
                        style={{ border: '1px solid lightgray' }}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col className='col'>
                    <span>£ 44.00</span>
                    <span
                      style={{
                        marginLeft: '4rem',
                        color: '#FF1F1F',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      Remove
                    </span>
                  </Col>
                </div>
              </Row>
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
                    <span className='text-bold'>£132.00</span>
                  </Col>
                </Row>
                <hr />
                <Form className='px-2 mb-3'>
                  <Form.Group className='mb-3' controlId='Delivery'>
                    <Form.Label>Shipping</Form.Label>
                    <Form.Select aria-label='Default select example'>
                      <option className='text-muted' value='3'>
                        Standard-Delivery - £3.00
                      </option>
                      <option className='text-muted' value='5e'>
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
                    <span className='text-bold'>£135.00</span>
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
                        borderBottom: '1px solid #525252s'
                      }}
                    >
                      {deliveryFormattedDate}
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
        )}
      </Container>
    </>
  )
}

export default CartScreen
