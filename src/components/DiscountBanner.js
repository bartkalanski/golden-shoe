import React from 'react'
import { Link } from 'react-router-dom'

const DiscountBanner = () => {
  return (
    <div className='navbar header__discount-container'>
      <span className='header__discount'>
        <Link className='text-light text-link'>
          Sign up to newsletter for 10% discount
        </Link>
      </span>
    </div>
  )
}

export default DiscountBanner
