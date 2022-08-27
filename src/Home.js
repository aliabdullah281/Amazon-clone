import React from 'react'
import './Home.css'
import Product from './Product';
const  Home = () => {
  return (
    <div className='home'> 
   <div className='home__container'>
    
       <img className='home__image' src="amazon-banner.jpg" alt="" /> 
       


   <div className='home__row'> 
   <Product id="12345" title='The lean startup' price={29.99} image='81-QB7nDh4L.jpg' rating={5} /> 
   <Product id="134" title='Moon Walking with Einstein' price={19.99} image='mwwe.jpg' rating={3}/> 
   </div>
   <div className='home__row'>
   <Product id="55" title='The Almanack of Naval Ravikant' price={20.9} image="almanack.jpg" rating={3}/>
   <Product id="10000" title="Nike Air Force" price={100} image='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoe-rWtqPn.png' rating={5} />
   <Product id="10000" title="Nike Air Force" price={100} image='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fc4622c4-2769-4665-aa6e-42c974a7705e/air-force-1-07-shoe-rWtqPn.png' rating={5} />
   
   </div>
   <div className='home__row'>
   <Product id="10000" title="Adidas Stan Smith" price={95} image='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3fae9c3af12b46cda41cac5a015738a4_9366/Stan_Smith_Shoes_White_Q47226_05_standard.jpg' rating={5} />
   
   </div>
    </div>
    </div>
  )
}

export default  Home