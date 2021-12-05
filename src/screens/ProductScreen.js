import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import ShopContext from '../context/shop-context'
import productData from '../data/productData'

const ProductScreen = () => {
  const context = useContext(ShopContext)
  const { id } = useParams()

  const handleAddToBasket = (event) => {
    event.preventDefault()
    const shoe = context.products.find((element) => element.id === Number(id))
    const shoeSize = event.target.sizeInput.value
    if (shoeSize !== 'Please select')
      context.addProductToCart({ ...shoe, size: shoeSize, quantity: 1 })
  }
  return (
    <Container className='my-5'>
      <hr />
      <Container className='my-4'>
        {productData.map(
          (product) =>
            product.id === Number(id) && (
              <Row className='justify-content-center'>
                <Col md={8} lg={5} xl={4}>
                  <img className='img-fluid' src={product.img} />
                </Col>
                <Col md={4}>
                  <h1>{product.name}</h1>
                  <div>
                    <span
                      style={{
                        fontSize: '1rem',
                        fontWeight: '300',
                        color: '#333',
                      }}
                    >
                      {' '}
                      {product.description}
                    </span>
                  </div>
                  <Form
                    className='d-flex flex-column my-3'
                    onSubmit={handleAddToBasket}
                  >
                    <span
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '300',
                        color: '#333',
                      }}
                    >
                      £ {product.price}
                    </span>
                    <span
                      htmlFor='colourInput'
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '300',
                        color: '#333',
                      }}
                    >
                      Colour:{' '}
                      <span
                        style={{
                          fontWeight: '500',
                        }}
                      >
                        {product.colour}
                      </span>
                    </span>

                    <Form.Group>
                      <Form.Label
                        htmlFor='sizeInput'
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: '300',
                          color: '#333',
                        }}
                      >
                        {' '}
                        Size:
                      </Form.Label>
                      <Form.Select id='sizeInput' required>
                        <option>Please select</option>
                        {product.size.map((size) => (
                          <option value={size}>{size}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Button
                      type='submit'
                      className='my-3'
                      style={{ background: '#FA817A', border: 'none' }}
                    >
                      Add to shopping cart
                    </Button>
                  </Form>
                </Col>{' '}
              </Row>
            )
        )}
      </Container>
      <hr />
    </Container>
  )
}

export default ProductScreen
