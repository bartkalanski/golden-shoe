import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const OrderLookupScreen = () => {
  return (
    <div className='order-lookup'>
      <Container>
        <h1 className='my-5'>Track an Order</h1>
      </Container>
      <hr />
      <Container>
        <Row className='justify-content-center'>
          <Col lg='4'>
            <Form>
              <Form.Group className='mb-3' controlId='formOrder'>
                <Form.Label>Order Number</Form.Label>
                <Form.Control type='text' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formPostcode'>
                <Form.Label>Delivery Postcode</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Button variant='dark' type='submit' className='py-2 px-4'>
                TRACK MY ORDER
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OrderLookupScreen
