import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

import SearchBox from './SearchBox'
import ShopContext from '../context/shop-context'

const Header = () => {
  const context = useContext(ShopContext)
  return (
    <header style={{ borderBottom: '1px solid lightgray' }}>
      <div className='navbar' style={{ height: '3rem', background: '#A09E7F' }}>
        <span className='text-light' style={{ margin: '0 auto' }}>
          <Link
            style={{
              color: 'white',
              textDecoration: 'none',
              letterSpacing: '1px',
            }}
          >
            Sign up to newsletter for 10% discount
          </Link>
        </span>
      </div>
      <div className='navbar' style={{ height: '3rem', background: '#C2BF9A' }}>
        <Container className='d-flex flex-row justify-content-end'>
          <Link
            to='/orderLookup'
            className='d-flex align-items-center text-dark'
            style={{ textDecoration: 'none', marginRight: '1rem' }}
          >
            <i
              className='bi bi-truck mr-1'
              style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
            ></i>
            <span>Track Order</span>
          </Link>
          <Link
            to='/help'
            className='d-flex align-items-center text-dark'
            style={{
              textDecoration: 'none',
              listStyle: 'none',
              marginRight: '1rem',
            }}
          >
            <i
              class='bi bi-headset mr-1'
              style={{
                fontSize: '1.5rem',
                marginRight: '.5rem',
              }}
            ></i>
            <span>Help</span>
          </Link>
          <Link
            to='/'
            className='d-flex align-items-center text-dark'
            style={{ textDecoration: 'none', marginRight: '1rem' }}
          >
            <i
              className='bi bi-person-circle'
              style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
            ></i>
            <span> Log in / Register</span>
          </Link>
        </Container>
      </div>
      <Navbar
        variant='light'
        expand='lg'
        style={{ background: '#fff' }}
        collapseOnSelect
      >
        <Container>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand style={{ fontSize: '2.5rem', fontFamily: 'Georgia' }}>
              Golden Shoe
            </Navbar.Brand>
          </Link>
          <Nav.Link>
            <Link
              to='/womens'
              className='text-dark'
              style={{ textDecoration: 'none' }}
            >
              Womens
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to='/mens'
              className='text-dark'
              style={{ textDecoration: 'none' }}
            >
              Mens
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to='/kids'
              className='text-dark'
              style={{ textDecoration: 'none' }}
            >
              Kids
            </Link>
          </Nav.Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='d-flex flex-row justify-content-end'
          >
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav style={{ marginLeft: '1rem' }}>
              <Nav.Link>
                <Link
                  to='/cart'
                  className='text-dark d-flex flex-row align-items-center'
                  style={{ textDecoration: 'none', position: 'relative' }}
                >
                  <span style={{ position: 'absolute', bottom: '16px', left: '14px', color: '#830000' }}>
                    {context.cart.length}
                  </span>
                  <i
                    className='bi bi-cart'
                    style={{ fontSize: '2.25rem', marginRight: '.5rem' }}
                  />
                  <span style={{ marginBottom: '.4rem'}}>
                  Cart
                  </span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
