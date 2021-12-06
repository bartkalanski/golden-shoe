import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

const BottomNav = () => {
  return (
    <Navbar
      variant='light'
      expand='lg'
      className='bottom-nav__container'
      collapseOnSelect
    >
      <Container className='d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-between'>
        <ul className='d-flex flex-column align-items-center text-light px-2 bottom-nav__ul'>
          <li className='mb-2 bottom-nav__li-heading'>Golden Shoe</li>
          <li>
            <Link to='/womens' className='text-light text-link'>
              Womens
            </Link>
          </li>
          <li>
            <Link to='/mens' className='text-light text-link'>
              Mens
            </Link>
          </li>
          <li>
            <Link to='/kids' className='text-light text-link'>
              Kids
            </Link>
          </li>
        </ul>
        <ul className='d-flex flex-column align-items-center text-light px-2 bottom-nav__ul'>
          <li className='mb-2 bottom-nav__li-heading'>Help and Information</li>
          <li>
            <Link to='/help' className='text-light text-link'>
              Help
            </Link>
          </li>
          <li>
            <Link to='/orderLookup' className='text-light text-link'>
              Track Order
            </Link>
          </li>
          <li>
            <Link to='/returns' className='text-light text-link'>
              Returns
            </Link>
          </li>
          <li>
            <Link to='/contact' className='text-light text-link'>
              Contact us
            </Link>
          </li>
        </ul>
        <ul className='d-flex flex-column align-items-center text-light px-2 bottom-nav__ul'>
          <li className='mb-2 bottom-nav__li-heading'>About Golden Shoe</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Sustainability</li>
        </ul>
        <div className='d-flex flex-row align-items-start text-light px-2'>
          <i className='bi bi-facebook m-2 bottom-nav__icons' />
          <i className='bi bi-instagram m-2 bottom-nav__icons' />
          <i className='bi bi-twitter m-2 bottom-nav__icons' />
        </div>
      </Container>
    </Navbar>
  )
}

export default BottomNav
