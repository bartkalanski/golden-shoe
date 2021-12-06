import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

import productData from '../data/productData'
import Product from '../components/Product'

const ProductListScreen = () => {
  const location = useLocation()
  const locationArray = location.pathname.split('')
  const formatString = locationArray.slice(1, locationArray.length).join('')

  return (
    <div className='product-list'>
      <Container>
        <h1 className='my-5 capitalise-first'>{formatString} Shoes</h1>
      </Container>
      <hr />
      <Container className='my-5'>
        <Row>
          {productData.map((product) => (
            <Product product={product} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductListScreen
