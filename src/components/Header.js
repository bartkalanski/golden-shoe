import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'

const Header = () => {
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
        <Container className='d-flex flex-row align-items-center justify-content-end'>
          <li
            className='d-flex align-items-center'
            style={{ listStyle: 'none', marginRight: '1rem' }}
          >
            <i
              className='bi bi-truck mr-1'
              style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
            ></i>
            <span>Track Order</span>
          </li>
          <li
            className='d-flex align-items-center'
            style={{ listStyle: 'none', marginRight: '1rem' }}
          >
            <i
              class='bi bi-headset mr-1'
              style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
            ></i>
            <span>Customer Services</span>
          </li>
          <li
            className='d-flex align-items-center'
            style={{ listStyle: 'none', marginRight: '1rem' }}
          >
            <i
              className='bi bi-person-circle'
              style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
            ></i>
            <span> Register</span>
          </li>
        </Container>
      </div>
      <Navbar
        variant='light'
        expand='lg'
        style={{ background: '#fff' }}
        collapseOnSelect
      >
        <Container>
          <Nav.Link to='/'>
            <Navbar.Brand style={{ fontSize: '2rem' }}>
              Golden Shoe
            </Navbar.Brand>
          </Nav.Link>
          <Nav.Link href='#' className='text-dark'>
            Womens
          </Nav.Link>
          <Nav.Link href='#' className='text-dark'>
            Mens
          </Nav.Link>
          <Nav.Link href='#' className='text-dark'>
            Kids
          </Nav.Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='d-flex flex-row justify-content-end'
          >
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav style={{ marginLeft: '1rem' }}>
              <Nav.Link>
                <i
                  className='bi bi-cart'
                  style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
                ></i>
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
