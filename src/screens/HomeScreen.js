import React from 'react'
import { Container, Button } from 'react-bootstrap'
import background from '../images/winter.jpeg'

const HomeScreen = () => {
  return (
    <div
      className='text-center'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(194, 191, 154, 0.6), rgba(194, 191, 154, 0.8)
      ),url(${background})`,
        height: '80vh',
      }}
    >
      <Container
        className='promo-banner px-3 d-flex flex-column justify-content-between'
        style={{
          maxWidth: '50rem',
          height: '60vh',
          opacity: '.8',
        }}
      >
        <div
          style={{
            background: 'white',
            height: '30vh',
          }}
          className='text-dark d-flex flex-column align-items center'
        >
          <span
            style={{
              fontSize: '2vw',
              textDecoration: 'underline #C50000 solid',
              textUnderlineOffset: '10px',
              marginTop: '2rem',
            }}
          >
            OUR HUGE CHRISTMAS SALE
          </span>
          <span style={{ fontSize: '3vw' }}>30% OFF</span>
          <span style={{ fontSize: '1.5vw' }}>USE CODE: BF30</span>
        </div>
        <div
          className='d-flex flex-column align-items-center text-light'
          style={{ background: 'black', height: '10vh' }}
        >
          <span style={{ fontSize: '2vw' }}>MORE LINES ADDED</span>
          <span style={{ fontSize: '1vw' }}>SELECTED STYLES ONLY</span>
        </div>
        <div
          className='d-flex flex-row align-items-center justify-content-center text-light'
          style={{ background: 'white', height: '20vh' }}
        >
          <Button
            style={{
              background: '#C50000',
              border: 'none',
              marginRight: '1rem',
              padding: '.75rem 2rem'
            }}
          >
            Shop Womens
          </Button>
          <Button
            style={{
              background: '#C50000',
              border: 'none',
              marginRight: '1rem',
              padding: '.75rem 2rem'
            }}
          >
            Shop Mens
          </Button>
          <Button
            style={{
              background: '#C50000',
              border: 'none',
              marginRight: '1rem',
              padding: '.75rem 2rem'
            }}
          >
            Shop Kids
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default HomeScreen
