import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import productData from '../productData'

const ProductScreen = () => {
  const { id } = useParams()
  console.log('location', id)
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
                  <Form className='d-flex flex-column my-3'>
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
                      <Form.Select id='sizeInput'>
                        <option>Please select</option>
                        {product.size.map((size) => (
                          <option value={size}>{size}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Button
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
