import React from 'react'
import { Container } from 'react-bootstrap'

const ReturnsScreen = () => {
  return (
    <Container className='returns mb-5'>
      <h1 className='my-5 text-center'>Delivery & Returns</h1>
      <p>
        Return any unwanted items back to us for FREE within 28 days for a full
        refund for purchases made via the Golden Shoe website or app. Exchanges
        within 14 days.
      </p>

      <p>Return faulty goods within 6 months for a full refund or exchange.</p>

      <p className='mb-3'>
        Simply package your purchase with the order note, attach the sticker
        found on our free returns label and hand it in to your preferred
        courier. Please remember to ask for proof of postage.
      </p>
      <hr />

      <h2 className='h4 my-3'>Return to a Golden Shoe Store</h2>
      <p>
        You can return your order to a Golden Shoe store for an exchange or for
        an immediate refund. We recommend returning your order to a Golden Shoe
        store if a product is faulty, or you ordered the wrong size. Our store
        staff can assist you in finding an alternative product in the correct
        size.
      </p>
      <p className='mb-3'>
        You will also need to bring the credit/debit card used to make the
        original purchase.
      </p>
      <hr />
      <h2 className='h4 my-3'>Can't find your free returns label?</h2>
      <p className='mb-3'>
        You can simply download and print a new one <a href='#'>here</a>. No
        printer? No problem! You can simply choose a courier who will print it
        for you.
      </p>
      <hr />

      <h2 className='h4 my-3'>Instant Returns with InPost Lockers</h2>
      <p>
        You can drop off your unsuitable return at your local InPost locker 24
        hours, 7 days a week. Choose from over 1,200 lockers and return in
        seconds with just the scan of a QR code.
      </p>
      <p>
        To find your nearest locker and create your instant returns QR code,
        click <a href='#'>here</a>.
      </p>
      <p className='mb-3'>
        PLEASE NOTE: all items from the same order should be returned in one
        parcel. Maximum parcel size: 41cm x 38cm x 64cm.
      </p>
    </Container>
  )
}

export default ReturnsScreen
