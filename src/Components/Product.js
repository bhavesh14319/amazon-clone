import React from 'react'
import '../CSS/Product.css'
import { useStateValue } from '../StateProvider'

function Product({title,price,rating,imgsrc,id}) {

  const [{basket},dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
      // dispatch item to data layer
      dispatch(
        {
          type:'ADD_TO_BASKET',
          item: {
            id:id,
            title:title,
            imgsrc:imgsrc,
            price:price,
            rating:rating,
          },
        }
      )
    

  }


  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price"><small>₹</small><strong>{price}</strong></p>
            <div className="productRating">
                {Array(rating).fill().map((_)=>{
                   return <p>⭐</p>
                })}
            </div>
        </div>
        <img src={imgsrc} alt="" />

        <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product
