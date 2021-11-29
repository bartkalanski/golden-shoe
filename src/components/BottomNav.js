import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const BottomNav = () => {
  return (
    <Navbar
      variant='light'
      expand='lg'
      style={{ background: '#1F1F1F', height: '11rem' }}
      collapseOnSelect
    >
      <Container className='d-flex flex-row align-items-start justify-content-between'>
        <ul
          className='d-flex flex-column align-items-center text-light px-2'
          style={{ listStyle: 'none' }}
        >
          <li className='mb-2' style={{ fontSize: '1.25rem' }}>
            Golden Shoe
          </li>
          <li>Mens</li>
          <li>Womens</li>
          <li>Kids</li>
        </ul>
        <ul
          className='d-flex flex-column align-items-center text-light px-2'
          style={{ listStyle: 'none' }}
        >
          <li className='mb-2' style={{ fontSize: '1.25rem' }}>
            Help and Information
          </li>
          <li>Help</li>
          <li>Track Order</li>
          <li>Returns</li>
        </ul>
        <ul
          className='d-flex flex-column align-items-center text-light px-2'
          style={{ listStyle: 'none' }}
        >
          <li className='mb-2' style={{ fontSize: '1.25rem' }}>
            About Golden Shoe
          </li>
          <li>About us</li>
          <li>Careers</li>
          <li>Sustainability</li>
        </ul>
        <div className='d-flex flex-row align-items-start text-light px-2'>
          <i className='bi bi-facebook m-2' style={{ fontSize: '1.5rem' }} />
          <i className='bi bi-instagram m-2' style={{ fontSize: '1.5rem' }} />
          <i className='bi bi-twitter m-2' style={{ fontSize: '1.5rem' }} />
        </div>
      </Container>
    </Navbar>
  )
}

export default BottomNav
