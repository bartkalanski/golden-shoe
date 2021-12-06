import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

const PromotionBanner = () => {
  return (
    <Container className='promo-banner px-3 d-flex flex-column justify-content-between'>
      <div className='text-dark d-flex flex-column align-items center promo-banner__upper'>
        <span className='mb-3 h1 promo-banner__upper-title'>
          OUR HUGE CHRISTMAS SALE
        </span>
        <span className='mb-2 h2'>
          30% OFF
        </span>
        <span className='h6'>USE CODE: XMAS30</span>
      </div>
      <div className='d-flex flex-column align-items-center text-light promo-banner__mid'>
        <span className='h3 mt-2'>MORE LINES ADDED</span>
        <span className='h5'>SELECTED STYLES ONLY</span>
        <span className='h6'>Online and instore</span>
      </div>
      <div className='d-flex flex-row align-items-center justify-content-center text-light promo-banner__bottom'>
        <Link to='/womens' className='text-light text-link'>
          <Button type='button' className='promo-banner__btn'>
            Shop Womens
          </Button>
        </Link>
        <Link to='/mens' className='text-light text-link'>
          <Button type='button' className='promo-banner__btn'>
            Shop Mens
          </Button>
        </Link>
        <Link to='/kids' className='text-light text-link'>
          <Button type='button' className='promo-banner__btn'>
            Shop Kids
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default PromotionBanner
