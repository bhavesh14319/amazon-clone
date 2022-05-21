import React from 'react'
import '../CSS/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'


function CheckoutProduct({id,imgsrc,title,price,rating,hideButton}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }

  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct__image' src={imgsrc} alt="" />
        
        <div className="checkoutproduct__prodinfo">
        <div className="checkoutproduct__info">
            <p className='checkoutproduct__title'>{title}</p>
            <p className='checkoutproduct__price'><small>₹</small><strong>{price}</strong></p>
        </div>

        <div className="checkoutproduct__rating">
            {Array(rating).fill().map((_)=>{
                   return <p>⭐</p>
                })}
        </div>
        
        {
            hideButton && ( <button onClick={removeFromBasket}>Remove From Basket</button>)
        }
       
        </div>       
        
        
    </div>
    
  )
}

export default CheckoutProduct
