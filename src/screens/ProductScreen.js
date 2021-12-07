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
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
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
                    <span className='product__description'>
                      {' '}
                      {product.description}
                    </span>
                  </div>
                  <Form
                    className='d-flex flex-column my-3'
                    onSubmit={handleAddToBasket}
                  >
                    <span className='product__price'>£ {product.price}</span>
                    <span htmlFor='colourInput' className='product__colour'>
                      Colour:{' '}
                      <span className='product__colour-item'>
                        {product.colour}
                      </span>
                    </span>

                    <Form.Group>
                      <Form.Label htmlFor='sizeInput' className='product__size'>
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
                    <Button type='submit' className='product__btn my-3'>
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
