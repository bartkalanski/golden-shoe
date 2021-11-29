import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="" style={{ background: 'black' }}>
      <Container>
        <Row>
          <Col className='text-light d-flex flex-row align-items-center justify-content-between'>
            <span className='text-left py-3'>Copyright &copy; Golden Shoe</span>
            <div>
              <i
                className='bi bi-facebook m-2'
                style={{ fontSize: '1.5rem' }}
              />
              <i
                className='bi bi-instagram m-2'
                style={{ fontSize: '1.5rem' }}
              />
              <i className='bi bi-twitter m-2' style={{ fontSize: '1.5rem' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
