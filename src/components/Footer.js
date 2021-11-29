import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="" style={{ background: 'black' }}>
      <Container>
        <Row>
          <Col className='text-light d-flex flex-row align-items-center justify-content-between'>
            <span className='text-left py-3'>Copyright &copy; Golden Shoe</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
