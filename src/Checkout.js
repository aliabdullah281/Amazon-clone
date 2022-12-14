import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
   const [{basket}, dispatch]  = useStateValue();

  return (
    <div  className='checkout'>
        <div className='checkout_left'>
            <img src='ad.jpg' className='checkout__ad' alt='' />
            <div className='checkout__title'> 
            <h2>Your Shopping Basket </h2>

            {basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            </div>
        </div>

        <div className='checkout_right'>
            <Subtotal/>
          
        </div>
        </div>
  )
}

export default Checkout
