import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const OrderLookupScreen = () => {
  return (
    <>
      <Container>
        <h1
          className='my-5'
          style={{ fontWeight: 'normal', fontSize: '3.5rem' }}
        >
          Track an Order
        </h1>
      </Container>
      <div style={{ width: '100vw', borderBottom: '1px solid lightgray' }} />
      <Container>
        <Row className='justify-content-center'>
          <Col lg='4'>
            <Form style={{ marginTop: '6rem', marginBottom: '6rem' }}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Order Number</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Delivery Postcode</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Button
                variant='dark'
                type='submit'
                className='py-2 px-4'
                style={{
                  width: '100%',
                  background: '#525252',
                }}
              >
                TRACK MY ORDER
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default OrderLookupScreen
