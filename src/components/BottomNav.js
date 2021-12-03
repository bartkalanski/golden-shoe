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
          style={{ listStyle: 'none', textDecoration: 'none' }}
        >
          <li className='mb-2' style={{ fontSize: '1.25rem' }}>
            Golden Shoe
          </li>
          <li>
            <Link to='/womens' className="text-light"  style={{ textDecoration: 'none' }}>
              Womens
            </Link>
          </li>
          <li>
            <Link to='/mens' className="text-light"  style={{ textDecoration: 'none' }}>
              Mens
            </Link>
          </li>
          <li>
            <Link to='/kids' className="text-light"  style={{ textDecoration: 'none' }}>
              Kids
            </Link>
          </li>
        </ul>
        <ul
          className='d-flex flex-column align-items-center text-light px-2'
          style={{ listStyle: 'none' }}
        >
          <li className='mb-2' style={{ fontSize: '1.25rem' }}>
            Help and Information
          </li>
          <li>
            <Link to='/help' className="text-light" style={{ textDecoration: 'none' }}>
              Help
            </Link>
          </li>
          <li>
            <Link to='/orderLookup' className="text-light" style={{ textDecoration: 'none' }}>
              Track Order
            </Link>
          </li>
          <li>
            <Link to='/returns' className="text-light" style={{ textDecoration: 'none' }}>
              Returns
            </Link>
          </li>
          <li>
            <Link to='/contact' className="text-light" style={{ textDecoration: 'none' }}>
              Contact us
            </Link>
          </li>
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
