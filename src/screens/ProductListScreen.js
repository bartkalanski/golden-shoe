import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import productData from '../productData'

const ProductListScreen = () => {
  const location = useLocation()
  const locationArray = location.pathname.split('')
  const formatString = locationArray.slice(1, locationArray.length).join('')

  return (
    <>
      <Container>
        <h1
          className='my-5 capitalise-first'
          style={{ fontWeight: 'normal', fontSize: '3rem' }}
        >
          {formatString} Shoes
        </h1>
      </Container>
      <hr />
      <Container className='my-5'></Container>
      <Container className='my-5'>
        <Row></Row>
        <Row>
          {productData.map((product) => (
            <Col md={6} lg={4} xl={3}>
              <Row>
                <Link to={`/product/${product.id}`} className="text-link">
                  <Col xs={12}>
                    <img className='img-fluid' src={product.img} />
                  </Col>
                  <Col>
                    <Row
                      className='align-items-end mt-4 mx-1'
                      style={{
                        borderBottom: '1px solid #ccc',
                        padding: '0 0 1.8rem',
                        marginRight: '',
                      }}
                    >
                      <Col xs={8} className='d-flex flex-column '>
                        {' '}
                        <span
                          style={{ fontSize: '1.3rem', marginBottom: '.9rem' }}
                        >
                          {product.name}
                        </span>
                        <span style={{ color: '#666', marginBottom: '.3rem' }}>
                          {product.category}
                        </span>
                        <span style={{ color: '#666' }}>{product.colour}</span>
                      </Col>
                      <Col xs={4} className='d-flex justify-content-end'>
                        <span style={{ fontSize: '1.3rem' }}>
                          £ {product.price}
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Link>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default ProductListScreen
