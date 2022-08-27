import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

const Product = ({id,title, image, price, rating}) => {
  // const [{ state }, dispatch] = useStateValue();
  const [{ basket }, dispatch] = useStateValue();
  console.log("This is the basket", basket)
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
        <div className="product__info"> 
            {/* <p> The Lean Startup </p> */}
            <p> {title} </p>
            <p classsName="product__price"> 
            <small> $ </small>
            {/* <strong> 19.99$ </strong> */}
            <strong> {price} </strong>
            </p>
             <div className='product__rating'>
                {/* <p>⭐⭐🌟 </p>  */}
                 {Array(rating)
                 .fill()
                 .map((_,i) => (
                  <p> ⭐ </p>
                 ))}  
                </div>
        </div>
        {/* <img src='81-QB7nDh4L.jpg' /> */}
        <img src={image} />
        <button onClick={addToBasket}> Add to Basket </button>
        </div>
  )
}

export default Product