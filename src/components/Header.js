import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

import ShopContext from '../context/shop-context'
import DiscountBanner from './DiscountBanner'

const Header = () => {
  const context = useContext(ShopContext)
  return (
    <header className='header'>
      <DiscountBanner />
      <div className='navbar-top'>
        <Container className='d-flex flex-row justify-content-center justify-content-md-end'>
          <Link
            to='/orderLookup'
            className='d-flex align-items-center text-dark text-link m-1 mt-2 m-md-2'
          >
            <i className='bi bi-truck navbar-top__icon'></i>
            <span className='navbar-top__text'>Track Order</span>
          </Link>
          <Link
            to='/help'
            className='d-flex align-items-center text-dark text-link m-1 mt-2 m-md-2'
          >
            <i class='bi bi-headset navbar-top__icon'></i>
            <span className='navbar-top__text'>Help</span>
          </Link>
          <Link
            to='/'
            className='d-flex align-items-center text-dark text-link m-1 mt-2 m-md-2'
          >
            <i className='bi bi-person-circle navbar-top__icon'></i>
            <span className='navbar-top__text'> Log in / Register</span>
          </Link>
        </Container>
      </div>
      <Navbar
        variant='light'
        expand='md'
        className='navbar-main'
        collapseOnSelect
      >
        <Container>
          <div className='d-flex flex-row-reverse flex-md-row justify-content-beteween align-items-center justify-content-md-start'>
            <Link to='/' className='text-link m-2 m-md-0'>
              <Navbar.Brand className='navbar__brand'>Golden Shoe</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='navbar-menu'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-menu'>
              <Nav className='m-2 m-md-0'>
                <Nav.Link>
                  <Link to='/' className='d-md-none text-dark text-link'>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/womens' className='text-dark text-link'>
                    Womens
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/mens' className='text-dark text-link'>
                    Mens
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/kids' className='text-dark text-link'>
                    Kids
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/cart' className='d-md-none text-dark text-link'>
                    Cart {context.cart.length}
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className='d-none d-md-flex flex-row align-items-start justify-content-end'>
            <Nav.Link>
              <Link
                to='/cart'
                className='text-dark d-flex flex-row align-items-center text-link navbar__cart-container'
              >
                <span className='navbar__cart-amount'>
                  {context.cart.length}
                </span>
                <i className='bi bi-cart navbar__cart-icon' />
                <span className='navbar__cart-text'>Cart</span>
              </Link>
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
