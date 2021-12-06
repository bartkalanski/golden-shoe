import React from 'react'
import { Button, Container, Col, Form, Row } from 'react-bootstrap'

const ContactScreen = () => {
  return (
    <Container className='contact my-5'>
      <h1 className='my-5 text-center'>Contact Us</h1>
      <Form>
        <Row className='mb-3 justify-content-center'>
          <Col xl={4}>
            <Form.Group controlId='formFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
          <Col xl={4}>
            <Form.Group controlId='formLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3 justify-content-center'>
          <Col xl={4}>
            <Form.Group controlId='formEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
          <Col xl={4}>
            <Form.Group controlId='formType'>
              <Form.Label>Type of Enquiry</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
        </Row>

        <Row className='mb-3 justify-content-center'>
          <Col xl={8}>
            <Form.Group className='mb-3' controlId='formEnquiry'>
              <Form.Label>Enquiry</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3 justify-content-center'>
          <Col xl={8}>
            <Button variant='dark' type='submit'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default ContactScreen
