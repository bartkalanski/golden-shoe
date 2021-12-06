import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

const HelpScreen = () => {
  return (
    <div className='help'>
      <Container>
        <h1 className='my-5'>Frequently Asked Questions</h1>
      </Container>
      <hr />
      <Container className='help__container my-5'>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Where is my order?</Accordion.Header>
                <Accordion.Body>
                  Please enter your order number{' '}
                  <Link to='/orderLookup'>here</Link> to view the most recent
                  update on your order.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>How do I return my order?</Accordion.Header>
                <Accordion.Body>
                  Returns to store are Free! Alternitvely please visit our
                  return page by clicking <Link to='/returns'>here</Link>. This
                  will give you various free options for posting your item back
                  to us.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Can I cancel my order?</Accordion.Header>
                <Accordion.Body>
                  Once the order is placed you cannot cancel it. There will be a
                  free returns sticker enclosed within your package so please
                  post it back to us using this.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='3'>
                <Accordion.Header>
                  How do I return an order I placed instore?
                </Accordion.Header>
                <Accordion.Body>
                  If you've ordered through an instore kiosk and would like an
                  exchange or to return an item, you will need to do this
                  instore as we are unable to process exchanges or returns for
                  kiosk orders via our Distribution Centre.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='4'>
                <Accordion.Header>
                  When can I expect my refund?
                </Accordion.Header>
                <Accordion.Body>
                  Upon receipt of your goods we will email you when your refund
                  has been processed. Please allow up to 5 working days for the
                  funds to show back in your account
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='5'>
                <Accordion.Header>How do I contact you?</Accordion.Header>
                <Accordion.Body>
                  Try our FAQ's for a quick answer, send us a message using{' '}
                  <Link to='/contact'>this</Link> form, or call us on 0121 333
                  1111, lines are open between 9am - 5pm, Monday to Friday.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HelpScreen
