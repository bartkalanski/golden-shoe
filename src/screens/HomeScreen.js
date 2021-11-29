import React from 'react'
import PromotionBanner from '../components/PromotionBanner'
import background from '../images/christmas.jpeg'

const HomeScreen = () => {
  return (
    <div
      className='text-center'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(194, 191, 154, 0.6), rgba(194, 191, 154, 0.8)
      ),url(${background})`,
        backgroundPosition: '30% 80%',
        height: '80vh',
      }}
    >
      <PromotionBanner />
    </div>
  )
}

export default HomeScreen
