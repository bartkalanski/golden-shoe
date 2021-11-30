import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

const PromotionBanner = () => {
  return (
    <Container
      className='promo-banner px-3 d-flex flex-column justify-content-between'
      style={{
        maxWidth: '50rem',
        height: '60vh',
        opacity: '.9',
      }}
    >
      <div
        style={{
          background: 'white',
          height: '27.5vh',
        }}
        className='text-dark d-flex flex-column align-items center'
      >
        <span
          className='mb-2'
          style={{
            fontSize: '2vw',
            textDecoration: 'underline #C50000 solid',
            textUnderlineOffset: '10px',
            marginTop: '2rem',
          }}
        >
          OUR HUGE CHRISTMAS SALE
        </span>
        <span className='mb-2' style={{ fontSize: '3vw' }}>
          30% OFF
        </span>
        <span style={{ fontSize: '1.5vw' }}>USE CODE: BF30</span>
      </div>
      <div
        className='d-flex flex-column align-items-center text-light'
        style={{ background: 'black', height: '12.5vh' }}
      >
        <span style={{ fontSize: '2vw' }}>MORE LINES ADDED</span>
        <span style={{ fontSize: '1vw' }}>SELECTED STYLES ONLY</span>
        <span style={{ fontSize: '.75vw' }}>Online and instore</span>
      </div>
      <div
        className='d-flex flex-row align-items-center justify-content-center text-light'
        style={{ background: 'white', height: '20vh' }}
      >
        <Link
          to='/productList'
          className='text-light'
          style={{ textDecoration: 'none' }}
        >
          <Button
            type='button'
            style={{
              background: '#C50000',
              border: 'none',
              marginRight: '1rem',
              padding: '.75rem 2rem',
            }}
          >
            Shop Womens
          </Button>
        </Link>
        <Link
          to='/productList'
          className='text-light'
          style={{ textDecoration: 'none' }}
        >
          <Button
            type='button'
            style={{
              background: '#C50000',
              border: 'none',
              marginRight: '1rem',
              padding: '.75rem 2rem',
            }}
          >
            Shop Mens
          </Button>
        </Link>
        <Link
          to='/productList'
          className='text-light'
          style={{ textDecoration: 'none' }}
        >
          <Button
            type='button'
            style={{
              background: '#C50000',
              border: 'none',
              marginRight: '1rem',
              padding: '.75rem 2rem',
            }}
          >
            Shop Kids
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default PromotionBanner
