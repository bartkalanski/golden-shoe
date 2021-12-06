import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Col md={6} lg={4} xl={3} className='mt-3'>
      <Row>
        <Link to={`/product/${product.id}`} className='text-link'>
          <Col xs={12}>
            <img className='img-fluid' src={product.img} />
          </Col>
          <Col>
            <Row className='product-list__container align-items-end mt-4 mx-1'>
              <Col xs={8} className='d-flex flex-column '>
                {' '}
                <span className='product-list__name'>{product.name}</span>
                <span className='product-list__category'>
                  {product.category}
                </span>
                <span className='product-list__colour'>{product.colour}</span>
              </Col>
              <Col xs={4} className='d-flex justify-content-end'>
                <span className='product-list__price'>£ {product.price}</span>
              </Col>
            </Row>
          </Col>
        </Link>
      </Row>
    </Col>
  )
}

export default Product
